import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  base: "/portafolio-lucas/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shell": path.resolve(__dirname, "./vendor/shell/src"),
      "@themes": path.resolve(__dirname, "./vendor/themes/src"),
    },
  },
});
