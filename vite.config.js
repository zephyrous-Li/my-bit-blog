import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 确保指向项目根目录下的 src 文件夹
    },
  },
  plugins: [vue()],
});
