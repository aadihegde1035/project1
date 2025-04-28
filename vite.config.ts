import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    middleware: [
      (req, res, next) => {
        // Handle client-side routing
        if (req.url?.includes('.')) {
          next();
        } else {
          req.url = '/';
          next();
        }
      },
    ],
  },
});