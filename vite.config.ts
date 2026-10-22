import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Nombre del repo en GitHub Pages: https://mballesterdev.github.io/ecommerce-product-page-FM/
  base: '/ecommerce-product-page-FM/',
})
