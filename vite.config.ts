import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  server: {
    host: '0.0.0.0', // Indispensable pour Docker/Cloud Run
    port: Number(process.env.PORT) || 8080,
  },
  preview: {
    host: '0.0.0.0', // Indispensable pour le mode preview/production
    port: Number(process.env.PORT) || 8080,
    allowedHosts: true,
  },
});