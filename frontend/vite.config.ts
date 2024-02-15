import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "node:path";

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
