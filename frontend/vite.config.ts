// Icons
import solidSvg from 'vite-plugin-solid-svg';

// Vike
import vikeSolid from 'vike-solid/vite';
import vike from 'vike/plugin';

// Vite
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
const root = resolve(__dirname, '.');

export default defineConfig({
  plugins: [vike(), vikeSolid(), solidSvg()],
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      wailsjs: resolve(root, 'wailsjs'),
    },
  },

  // Vite options tailored for Wails development.
  server: {
    port: 1420,
    strictPort: true,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
});
