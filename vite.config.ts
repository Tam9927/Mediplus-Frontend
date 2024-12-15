
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { createHtmlPlugin } from 'vite-plugin-html';
// import mkcert from 'vite-plugin-mkcert';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//     historyApiFallback: true, // Automatically open the browser
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   build: {
//     outDir: 'dist',
//   },
//   esbuild: {
//     jsxInject: `import React from 'react'`,
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    open: true, // Automatically opens the browser
    https: true, // Enables HTTPS for secure local development
  },
  resolve: {
    alias: {
      '@': '/src', // Shortcuts for cleaner imports
    },
  },
  build: {
    outDir: 'dist', // Specifies the output directory for the build
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Ensures React is injected in JSX files
  },
});
