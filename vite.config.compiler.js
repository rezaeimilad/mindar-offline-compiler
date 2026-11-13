
import { defineConfig } from 'vite';

export default defineConfig({
  mode: 'production',
  base: './',
  publicDir: false,

  build: {
    outDir: 'dist-compiler',
    emptyOutDir: true,

    rollupOptions: {
      input: 'examples/image-tracking/compile.html'
    }
  }
});
