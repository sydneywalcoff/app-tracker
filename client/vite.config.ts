import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:5174',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist', 
    sourcemap: true,
  }
})
