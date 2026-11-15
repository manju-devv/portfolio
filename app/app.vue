<script setup lang="ts">
useSeoMeta({
  title: "Freelance Software Developer | Web Apps & APIs",
  description:
    "Professional freelance software development services specializing in modern web applications, scalable APIs, backend systems and AI-powered digital solutions.",

  ogTitle: "Freelance Software Development Services",
  ogDescription:
    "Turning business ideas into digital products through modern web development, backend engineering, API integrations and AI solutions.",
  ogType: "website",
  ogLocale: "en_IN",
  ogSiteName: "Software Development Services",
  ogImage: "/images/og-image.webp",
  ogImageAlt: "Freelance software development services",

  twitterCard: "summary_large_image",
  twitterTitle: "Freelance Software Developer | Web Apps & APIs",
  twitterDescription:
    "Modern web applications, scalable APIs, backend systems and custom digital solutions.",
  twitterImage: "/images/og-image.webp",
});

useHead({
  meta: [
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#090b0a" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
