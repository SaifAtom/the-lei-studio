import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://saifatom.github.io/the-lei-studio/ on GitHub Pages,
// so every asset URL must be prefixed with the repository name.
export default defineConfig({
  base: '/the-lei-studio/',
  plugins: [react()],
})
