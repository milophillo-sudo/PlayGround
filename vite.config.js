import { defineConfig } from 'vite';

// The deployed page is reached through the OMGithub preview proxy, so the
// request Host is the tunnel domain instead of localhost. Preview must accept
// that host or every public request is rejected with HTTP 403.
export default defineConfig({
  base: './',
  preview: {
    allowedHosts: true,
  },
});
