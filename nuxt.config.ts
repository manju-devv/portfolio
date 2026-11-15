
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  devtools: {
    enabled: true,
  },

  modules: ["@nuxtjs/tailwindcss", "motion-v/nuxt"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Freelance Software Developer | Web Apps, APIs & Digital Solutions",
      titleTemplate: "%s",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
      ],
    },
  },
});
