/*
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 11:46:50
 * @Description:
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
});
