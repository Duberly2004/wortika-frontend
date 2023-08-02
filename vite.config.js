import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://64cae5d9c345110f2f7fa576--wortika.netlify.app/' //base
})
