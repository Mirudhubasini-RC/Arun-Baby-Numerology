import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // Its CommonJS build breaks the default `styled` export under Node ESM.
    noExternal: ['styled-components'],
  },
})
