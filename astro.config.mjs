import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://living-homeless.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: "server",
  adapter: vercel()
});