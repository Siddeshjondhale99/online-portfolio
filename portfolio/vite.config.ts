import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.jpeg", "**/*.svg"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
