// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    // Astro ignora PORT y usa 4321 fijo; se lee aquí para que el dev server
    // respete el puerto que asigne el entorno y no choque con otro proceso.
    port: Number(process.env.PORT) || 4321,
  },
});
