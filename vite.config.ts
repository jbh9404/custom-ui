import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // …svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
