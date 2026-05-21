import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Se estivermos no GitHub Pages, usamos o nome do repo, senão usamos a raiz
  base: '/MeuPortifolio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})