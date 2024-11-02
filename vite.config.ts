import path from "node:path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],

  build: {
    lib: {
      entry: "src/index.ts",
      name: "martinsthein-shared",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
