import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must be absolute, not './'. Relative asset URLs resolve against the current
  // path, so on /work/:slug the browser would request /work/assets/*.js — which
  // the SPA redirect answers with index.html, and the page renders blank.
  base: '/',
})
