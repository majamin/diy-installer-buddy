import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.env.NODE_ENV === "development";
const basePath = "/REPO_NAME"; // Replace with your GitHub repo name

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: "index.html",
      precompress: false,
      strict: true,
    }),
  },
  paths: {
    base: dev ? "" : basePath,
  },
};

export default config;
