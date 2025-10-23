import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pkg from './package.json';

//import path from 'path'
//import { fileURLToPath } from 'url'
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  server:{port:3000},
  base: '/premierprojet/',
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
