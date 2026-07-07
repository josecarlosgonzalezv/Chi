import { defineConfig } from 'vite';
import { resolve } from 'path';

import banner from 'vite-plugin-banner';
import { terser } from 'rollup-plugin-terser';

const copyright = `Chi and its documentation are released under the terms of the MIT license.
In addition, Chi uses several 3rd-party libraries,
a list of which can be viewed in the package.json file.
Please review each of their license and user agreements, as well.`;

export default defineConfig({
  plugins: [
    banner(copyright),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      input: {
        'chi-cja': resolve(__dirname, 'src/chi/cja/index.ts'),
      },
      output: {
        format: 'iife',
        entryFileNames: 'chi-cja.js',
        chunkFileNames: '[name].js',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
});
