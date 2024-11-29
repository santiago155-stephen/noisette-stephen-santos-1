import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contactUs: resolve(__dirname, 'contact-us.html'),
                location: resolve(__dirname, 'location.html'),
                menu: resolve(__dirname, 'menu.html')
            }
        }
    },
    // Optional: Add public base path for Render deployment
    base: '/'})