import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/estate-agent-app/',
  build: {
    outDir: 'docs', // output directly to docs
  },
})
