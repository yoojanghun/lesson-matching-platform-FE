import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // 추가
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // '/api'로 시작하는 요청을 백엔드 8080 포트로 보냅니다.
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})