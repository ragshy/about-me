import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Only add `base` in production for github pages
const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ],
  base: isProduction ? '/about-me/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
