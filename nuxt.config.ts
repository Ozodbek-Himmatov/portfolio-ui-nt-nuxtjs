export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      title: "Ozodbek | Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "/css/style.css",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Ozodbek's Portfolio Website",
        },
        { name: "author", content: "Ozodbek" },
      ],
    },
  },
});
