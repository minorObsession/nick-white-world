import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost", // Allow connections from any IP
    port: 5173,
    strictPort: true,
    open: false,
    hmr: {
      overlay: false,
    },
  },
});
