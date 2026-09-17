import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://adamworley.com",
  build: {
    inlineStylesheets: "always",
  },
});
