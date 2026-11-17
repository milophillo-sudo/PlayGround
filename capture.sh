#!/usr/bin/env bash
# Capture desktop and mobile screenshots of an already-running preview.
set -euo pipefail

: "${CAPTURE_URL:?CAPTURE_URL must be set to the preview URL}"
: "${CAPTURE_DIR:?CAPTURE_DIR must be set to an output directory outside the source tree}"

export CAPTURE_URL CAPTURE_DIR
PLAYWRIGHT_ROOT="${OMGITHUB_PLAYWRIGHT_ROOT:-$HOME/.local/share/omgithub-playwright}"
export PLAYWRIGHT_ROOT

now_ms() { date +%s%3N; }

timing() {
  local label="$1" start="$2" status="${3:-0}"
  printf '[timing] %s: %d ms (exit %s)\n' "$label" "$(( $(now_ms) - start ))" "$status"
}

capture_start=$(now_ms)
mkdir -p "$CAPTURE_DIR"
timing "prepare capture directory" "$capture_start"

capture_start=$(now_ms)
status=0
node --input-type=module - <<'NODE' || status=$?
import { createRequire } from 'node:module';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

class TransientError extends Error {
  constructor(message) {
    super(message);
    this.exitCode = 75;
  }
}

let timingStart = performance.now();
function mark(label) {
  console.log(`[timing] ${label}: ${Math.round(performance.now() - timingStart)} ms`);
  timingStart = performance.now();
}

const url = process.env.CAPTURE_URL;
const outputDir = process.env.CAPTURE_DIR;
const runtime = process.env.PLAYWRIGHT_ROOT;

let exitCode = 0;
let browser = null;

try {
  if (!url || !outputDir) throw new Error('CAPTURE_URL and CAPTURE_DIR are required.');

  if (process.platform === 'linux' && !process.env.DISPLAY) {
    try {
      process.env.DISPLAY = ':' + readFileSync(join(runtime, 'display'), 'utf8').trim();
    } catch {
      // Chromium may still launch with a default display.
    }
  }

  let launchOptions = {};
  try {
    const configFile = join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json');
    launchOptions = JSON.parse(readFileSync(configFile, 'utf8')).browser?.launchOptions || {};
  } catch {
    // Fall back to Playwright's defaults when the runtime config is unavailable.
  }

  const require = createRequire(join(runtime, 'package.json'));
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch (error) {
    throw new TransientError(`Playwright runtime unavailable: ${error.message}`);
  }

  try {
    browser = await chromium.launch({ ...launchOptions, timeout: 30000 });
  } catch (error) {
    throw new TransientError(`Browser launch failed: ${error.message}`);
  }
  mark('launch browser');

  const views = [
    { name: 'desktop', width: 1440, height: 900, mobile: false },
    { name: 'mobile', width: 390, height: 844, mobile: true },
  ];

  for (const view of views) {
    let page = null;
    const pageErrors = [];
    const assetErrors = [];

    try {
      try {
        page = await browser.newPage({
          viewport: { width: view.width, height: view.height },
          deviceScaleFactor: 1,
          isMobile: view.mobile,
          hasTouch: view.mobile,
        });
      } catch (error) {
        throw new TransientError(`Could not open ${view.name} page: ${error.message}`);
      }
      mark(`open ${view.name} page`);

      page.setDefaultTimeout(30000);
      page.on('pageerror', (error) => pageErrors.push(error.message));
      page.on('response', (response) => {
        if (response.status() < 400) return;
        let pathname = '';
        try { pathname = new URL(response.url()).pathname; } catch { return; }
        if (/\.(?:js|css|mp3|m4a|ogg|wav|png|jpe?g|webp|svg|woff2?)$/i.test(pathname)) {
          assetErrors.push(`HTTP ${response.status()} ${pathname}`);
        }
      });

      let response;
      try {
        response = await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      } catch (error) {
        throw new TransientError(`Navigation to ${url} failed: ${error.message}`);
      }
      mark(`load ${view.name}`);

      if (!response) throw new TransientError('Navigation produced no HTTP response.');
      if (!response.ok()) {
        const status = response.status();
        if ([408, 429, 500, 502, 503, 504].includes(status)) {
          throw new TransientError(`Preview returned HTTP ${status}.`);
        }
        throw new Error(`Preview returned HTTP ${status}.`);
      }

      const hasAppHook = await page.evaluate(() => Boolean(window.__cryout));
      try {
        if (hasAppHook) {
          await page.waitForFunction(() => {
            const app = window.__cryout;
            return Boolean(app && app.audio && app.audio.loaded && app.state === 'menu');
          }, undefined, { timeout: 60000 });
        } else {
          await page.waitForFunction(() => {
            const body = document.body;
            return document.readyState === 'complete' && body && body.innerText.trim().length > 0;
          }, undefined, { timeout: 60000 });
        }
      } catch (error) {
        if (!browser.isConnected()) {
          throw new TransientError(`Browser disconnected while waiting for ${view.name} content: ${error.message}`);
        }
        throw new Error(`Rendered content did not become ready: ${error.message}`);
      }
      mark(`wait for ${view.name} content`);

      const render = await page.evaluate(() => {
        const canvas = document.querySelector('canvas');
        const start = document.querySelector('#startScreen');
        return {
          textLength: (document.body.innerText || '').trim().length,
          hasCanvas: Boolean(canvas),
          canvasWidth: canvas ? canvas.width : 0,
          canvasHeight: canvas ? canvas.height : 0,
          startVisible: Boolean(start && (start.classList.contains('show') || getComputedStyle(start).visibility !== 'hidden')),
          state: window.__cryout?.state ?? null,
        };
      });

      if (render.textLength === 0) throw new Error('Page rendered no text content.');
      if (render.hasCanvas && (render.canvasWidth < 2 || render.canvasHeight < 2)) {
        throw new Error('WebGL canvas has no render surface.');
      }
      if (hasAppHook && !render.startVisible) throw new Error('Start screen is not visible.');
      if (hasAppHook && render.state !== 'menu') throw new Error(`Unexpected app state: ${render.state}`);

      // Let fonts, the intro animation, and the WebGL frame settle before capture.
      await page.waitForTimeout(1200);
      mark(`settle ${view.name}`);

      if (pageErrors.length) throw new Error(`Page errors: ${pageErrors.join(' | ')}`);
      if (assetErrors.length) throw new Error(`Failed assets: ${assetErrors.join(' | ')}`);

      const target = join(outputDir, `final-${view.name}.png`);
      try {
        await page.screenshot({ path: target, timeout: 30000 });
      } catch (error) {
        if (error.name === 'TimeoutError' || !browser.isConnected()) {
          throw new TransientError(`Screenshot failed: ${error.message}`);
        }
        throw error;
      }
      mark(`screenshot ${view.name}`);

      const size = statSync(target).size;
      if (size < 10240) throw new Error(`Screenshot ${target} looks blank (${size} bytes).`);
      console.log(`[capture] ${target} (${size} bytes)`);
    } finally {
      if (page) {
        try { await page.close(); mark(`close ${view.name} page`); }
        catch (error) { console.error(`Could not close ${view.name} page: ${error.message}`); }
      }
    }
  }
} catch (error) {
  console.error(error.stack || String(error));
  exitCode = error.exitCode || 1;
} finally {
  if (browser) {
    try {
      await browser.close();
      mark('close browser');
    } catch (error) {
      console.error(`Browser close failed: ${error.message}`);
      if (exitCode === 0) exitCode = 75;
    }
  }
}

process.exitCode = exitCode;
NODE
timing "playwright capture" "$capture_start" "$status"
exit "$status"
