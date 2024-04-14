import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://lucaslee0327.github.io/midterm-website-for-padn-test-2/",
        changeOrigin: true,
      },
    },
  },
});
