import adapter from "@sveltejs/adapter-auto";
import autoprefixer from "autoprefixer";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    postcss: {
      plugins: [autoprefixer()],
    },
    aliases: [["ts", "typescript"]],
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;
