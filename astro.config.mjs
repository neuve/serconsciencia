// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://karensilva.mx',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Páginas internas o de error: fuera del sitemap.
      filter: (page) => !/\/(design-system|404)\/?$/.test(page),
    }),
  ],
  server: {
    // Astro ignora PORT y usa 4321 fijo; se lee aquí para que el dev server
    // respete el puerto que asigne el entorno y no choque con otro proceso.
    port: Number(process.env.PORT) || 4321,
  },
});
