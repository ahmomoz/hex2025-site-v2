// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-24",
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/hex2025-site-v2/" : "/",
    buildAssetsDir: "/static/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
        },
      ],
      title: "Alyse Wang - 前端工程師 & 職涯諮詢師",
      meta: [
        {
          name: "description",
          content: "這是 Alyse Wang 的個人網站",
        },
        {
          property: "og:title",
          content: "Alyse Wang - 前端工程師 & 職涯諮詢師",
        },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "這是 Alyse Wang 的個人網站",
        },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-057GRT317V",
          async: true,
        },
        {
          id: "gtag-init",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-057GRT317V');
          `,
          type: "text/javascript",
          tagPosition: "head",
        },
      ],
    },
  },
  head: {
    __dangerouslyDisableSanitizersByTagID: {
      "gtag-init": ["innerHTML"],
    },
  },
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "bootstrap/scss/functions"; 
          @import "@/assets/stylesheets/scss/utils/variables";
          @import "@/assets/stylesheets/scss/utils/mixin";`,
        },
      },
    },
  },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
  modules: ["nuxt-gtag"],
});
