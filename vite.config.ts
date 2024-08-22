import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'arquivoTeste': path.resolve(__dirname, './arquivoTeste'),
    }
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },

  },
})
