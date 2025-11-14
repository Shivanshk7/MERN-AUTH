import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  //base: "/",
  //build: {
  //  outDir: "dist", // required for render
  //  emptyOutDir: true,
  //},
  server: {
    proxy: {
      "/api": {
        target: "https://mean-auth-backend.onrender.com", //your backend Render URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
