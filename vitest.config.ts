import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/test/**/*', 'src/vite-env.d.ts', 'src/main.tsx'],
    },
  },
});