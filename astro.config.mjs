import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
export default defineConfig({ site: 'https://www.heartsimplified.com', integrations: [tailwind({ applyBaseStyles: false }), mdx()], output: 'static' });