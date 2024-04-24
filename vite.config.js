import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html'
                // Add other HTML or entry files here
            }
        }
    }
});
