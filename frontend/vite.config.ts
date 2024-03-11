import { resolve } from "node:path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const root = resolve(__dirname, ".");

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@": resolve(root, "src"),
      wailsjs: resolve(root, "wailsjs"),
    },
  },
});
