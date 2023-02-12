<script setup lang="ts"></script>

<template>
  <main class="pt-28">
    <section class="container">
      <h1 class="font-bold text-2xl text-white">Dashboard</h1>
    </section>
    <section class="container mt-10">
      <LinkForm />
    </section>
    <section class="container mt-10">
      <LinkCard
        v-for="i in 10"
        :key="i"
        :link="{
          id: '1',
          shortKey: 'test',
          longUrl: 'https://google.com',
        }"
        class="mb-5"
      />
    </section>
  </main>
</template>
