// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
  alias: {
    "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/css/main.css", "~/assets/css/main.scss"],

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "DM+Sans": [400, 500, 700],
        },
        display: "swap",
      },
    ],
  ],
});
