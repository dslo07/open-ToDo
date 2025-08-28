import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import animations from '@midudev/tailwind-animations'
// No necesitas tailwindcss como plugin en Vite.
// Tailwind funciona solo con el archivo postcss.config.js y tailwind.config.js

export default defineConfig({
  plugins: [react(),tailwindcss(),animations ],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
