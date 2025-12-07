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
      // Proxy API calls to Spring Boot backend
      // Update the target port if your Spring Boot runs on a different port
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    }
  },
  // Use relative paths for deployment flexibility
  base: './',
  build: {
    // Build output stays in frontend directory for self-contained deployment
    outDir: 'dist',
    emptyOutDir: true,
    // Generate source maps for debugging
    sourcemap: true,
  }
})
