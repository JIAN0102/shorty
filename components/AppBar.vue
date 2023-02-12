<script setup lang="ts">
const navLinks = ref<
  {
    to: string;
    label: string;
  }[]
>([
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
]);
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-[999] bg-black border-b border-white/20 bg-blur"
  >
    <nav class="container flex justify-between py-4">
      <NuxtLink :to="{ name: 'index' }" class="font-bold text-2xl text-white">
        Shrty Nuxt 3
      </NuxtLink>

      <ul class="flex items-center gap-x-4">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="{
              name: 'auth',
            }"
            class="btn btn-primary"
            >Sign In</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
