import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      // IMPORTANT: Ensure Spring Boot is running on port 8080
      // If your Spring Boot runs on a different port (e.g., 8081),
      // update all target URLs below to match
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/contact': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/login-real': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/Pictures': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
  base: '/react-build/',
  build: {
    outDir: '../src/main/resources/static/react-build',
    emptyOutDir: true,
  }
})
