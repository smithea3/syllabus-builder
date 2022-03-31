import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src',
  base: '/syllabus-builder/',
  build: {
    minify: false,
  },
  plugins: [
    nunjucks({
      templatesDir: './src/templates',
    }),
  ]
})