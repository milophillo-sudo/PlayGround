#!/usr/bin/env bash
# Install dependencies, build the static bundle, and serve it in the foreground.
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

PORT="${PORT:-3000}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
BUILD_DIR="$PROJECT_DIR/dist"
STAGING_DIR="$PROJECT_DIR/dist.next"
DEPLOYMENT_OUTPUT="$OPENCODE_WEB_DIR/deployment-output.json"

export PORT

now_ms() { date +%s%3N; }

timing() {
  local label="$1" start="$2" status="${3:-0}"
  printf '[timing] %s: %d ms (exit %s)\n' "$label" "$(( $(now_ms) - start ))" "$status"
}

# Run one command in the foreground, report its duration, and preserve its status.
run() {
  local label="$1"; shift
  local start status=0
  start=$(now_ms)
  "$@" || status=$?
  timing "$label" "$start" "$status"
  return "$status"
}

# ---------------------------------------------------------------- dependencies
need_install=0
if [[ ! -x node_modules/.bin/vite ]]; then
  need_install=1
elif [[ -f package-lock.json && package-lock.json -nt node_modules/.package-lock.json ]]; then
  need_install=1
fi

if [[ "$need_install" -eq 1 ]]; then
  if [[ -f package-lock.json ]]; then
    run "npm ci" npm ci --no-audit --no-fund
  else
    run "npm install" npm install --no-audit --no-fund
  fi
else
  printf '[timing] npm install: skipped (dependencies current)\n'
fi

# ---------------------------------------------------------------- build
# Build beside dist and publish with rsync so dist/index.html is never missing
# while the controller or a preview request is reading it.
run "clean build staging" rm -rf "$STAGING_DIR"
run "vite build" npm run build -- --outDir "$(basename "$STAGING_DIR")" --emptyOutDir
[[ -f "$STAGING_DIR/index.html" ]] || {
  echo "Build failed: $STAGING_DIR/index.html is missing." >&2
  exit 1
}

if command -v rsync >/dev/null 2>&1; then
  run "publish dist" rsync -a --delete "$STAGING_DIR/" "$BUILD_DIR/"
else
  run "publish dist" bash -c 'rm -rf -- "$1" && mv -- "$2" "$1"' _ "$BUILD_DIR" "$STAGING_DIR"
fi
run "remove build staging" rm -rf "$STAGING_DIR"

[[ -f "$BUILD_DIR/index.html" ]] || {
  echo "Published output is missing: $BUILD_DIR/index.html" >&2
  exit 1
}

# ---------------------------------------------------------------- worker metadata
meta_start=$(now_ms)
mkdir -p "$OPENCODE_WEB_DIR"
tmp_output="$DEPLOYMENT_OUTPUT.tmp.$$"
printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$BUILD_DIR" > "$tmp_output"
mv -f "$tmp_output" "$DEPLOYMENT_OUTPUT"
timing "write deployment-output.json" "$meta_start"

# ---------------------------------------------------------------- serve
echo "[startup] serving $BUILD_DIR on http://0.0.0.0:$PORT (foreground)"
run "vite preview" node_modules/.bin/vite preview --host 0.0.0.0 --port "$PORT" --strictPort
