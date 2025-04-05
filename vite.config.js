import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Указываем базовый путь
  build: {
    outDir: 'dist', // Указываем директорию вывода сборки
    emptyOutDir: true, // Очищаем директорию перед сборкой
    rollupOptions: {
      input: {
        main: 'index.html' // Входной файл
      }
    }
  },
  publicDir: 'public' // Определяем директорию для статических файлов
});