import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
    }
  },
  optimizeDeps: {
    include: ['swiper/css', 'swiper/css/navigation']
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/okdocs': {
        target: 'https://treina.okdocs.com.br',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/okdocs/, '')
      }
    }
  }
})
