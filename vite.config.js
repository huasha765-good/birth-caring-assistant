import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // 1. 插件精简：只保留 React 核心插件，移除所有内网专用插件
  plugins: [react()],

  // 2. 路径修正：确保根路径为 /，避免资源加载 404
  base: '/',

  build: {
    // 3. 输出目录：强制指定为 dist，与 Vercel 默认配置对齐
    outDir: 'dist',
  },

  resolve: {
    alias: {
      // 标准化路径别名配置
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'lib': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
});
