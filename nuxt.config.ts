
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  devtools: {
    enabled: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "motion-v/nuxt",
    "@nuxtjs/sitemap",
  ],

  // Website information used by the sitemap
  site: {
    url: "https://portfolio-gamma-puce-mfmwc0op25.vercel.app",
    name: "Full Stack Developer Portfolio",
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Freelance Software Developer | Web Apps, APIs & Digital Solutions",
      titleTemplate: "%s",
      meta: [
      {
        name: "google-site-verification",
        content: "FFTKNr4ikxXvoehVG7P9XTZj4n-SXd9Ftk19JsAl0-A",
      },
    ],
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
