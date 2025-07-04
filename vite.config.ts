import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow connections from any IP
    port: 5173, // Default Vite port
    strictPort: true, // Fail if port is already in use
    open: false, // Don't auto-open browser
  },
});
