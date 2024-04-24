import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                table: './table.html',
                map: './map.html'
                // Add other HTML or entry files here
            }
        }
    }
});
