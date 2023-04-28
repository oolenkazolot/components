import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text', 'html'],
      all: true,
    },
  },
};

export default defineConfig({
  plugins: [react({ fastRefresh: false }), cssInjectedByJsPlugin()],
  test: vitestConfig.test,
  server: { port: 3000 },
  build: {
    minify: false,
  },
  root: '',
});
