import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin() // Inject CSS into the JavaScript file
  ],
  define: {
    "process.env": {}, // Define `process.env` as an empty object
  },
  build: {
    lib: {
      entry: "src/main.jsx", // Entry point of the widget
      name: "BigcityWidget", // Global variable name for the widget
      fileName: () => "bigcity-widget.js", // Force output as .js
      formats: ["umd"], // UMD format for compatibility
    },
    rollupOptions: {
      // React and ReactDOM will NOT be treated as external dependencies
      external: [], // Bundling everything into the build
    },
  },
});
