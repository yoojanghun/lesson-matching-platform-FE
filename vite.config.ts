import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // 추가
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})