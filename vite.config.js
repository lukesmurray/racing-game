import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [reactJsx(), reactRefresh(), viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.mp3', '**/*.SVG'],
})
