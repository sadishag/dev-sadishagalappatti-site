import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const { VITE_BASE_URL } = import.meta.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: `/${VITE_BASE_URL}/`,
});
