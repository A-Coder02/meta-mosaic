import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MetaMosaic',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
      cssFileName: 'meta-mosaic.css',  // <- names CSS bundle
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'meta-mosaic.css'   // unify CSS file name
          }
          return assetInfo.name
        }
      }
    }
  }
})
