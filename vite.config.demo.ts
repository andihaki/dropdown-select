import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "./",
  base: process.env.GITHUB_PAGES ? "/dropdown-select/" : "/", // Change to your repo name
  build: {
    outDir: "./dist-demo",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(dirname, "src/components"),
      "@icons": path.resolve(dirname, "src/icons"),
      "dropdown-select-z9": path.resolve(dirname, "src/index.ts"),
    },
  },
});
