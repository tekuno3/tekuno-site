import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tekuno-site/',
  plugins: [react({
    babel: {
      plugins: [],
    },
  })],
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  resolve: {
    alias: {
      '@src': '/src',
    }
  }
})
