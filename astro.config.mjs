// @ts-check
import { defineConfig } from 'astro/config';
import blocks from '@alfadormx/blocks/integration';

export default defineConfig({
  integrations: [blocks({ config: './src/config.yaml', css: './src/styles/global.css' })],
});
