import react from '@vitejs/plugin-react'
import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',
  },
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../',
  },
  resolve: {
    alias: { '/src': path.resolve(process.cwd(), 'src') },
  },
})
