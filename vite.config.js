import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const { BASE_URL } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: `/${BASE_URL}/`,
});
