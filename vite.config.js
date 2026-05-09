import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "오늘은 마라?!",
        short_name: "마라?!",
        description: "마라탕 메뉴 랜덤 추천 앱",
        start_url: "/",
        display: "standalone",
        background_color: "#f9f5ff",
        theme_color: "#c084fc",
        lang: "ko",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
    }),
  ],
  server: { port: 3000 },
});
