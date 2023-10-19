/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import mixPlugin, { Adapter } from 'vite-plugin-mix';

interface MixConfig {
  handler: string;
  adapter?: Adapter | undefined;
}

type MixPlugin = (config: MixConfig) => Plugin;

interface Mix {
  default: MixPlugin;
}

const mix = (mixPlugin as unknown as Mix).default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    mix({
      handler: './src/api/app.ts',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/ui/tests/setup.js',
  },
});
