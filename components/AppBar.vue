<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 14:22:57
 * @Description:
-->
<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

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

const handleLogout = async () => {
  await client.auth.signOut();
  navigateTo("/");
};
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
        <li v-if="!user">
          <NuxtLink
            :to="{
              name: 'auth',
            }"
            class="btn btn-primary"
            >Sign In</NuxtLink
          >
        </li>
        <li v-else>
          <button @click="handleLogout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
