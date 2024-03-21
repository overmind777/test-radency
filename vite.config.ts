import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'test-radency',
  root: 'src/index.html',
  build: {
    outDir: '../dist'
  }
})
