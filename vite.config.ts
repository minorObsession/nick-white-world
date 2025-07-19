import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost", // Allow connections from any IP
    hmr: {
      overlay: false, // Disable error overlay that can cause crashes
    },
    port: 5173, // Default Vite port
    strictPort: true, // Fail if port is already in use
    open: false, // Don't auto-open browser
  },
});
