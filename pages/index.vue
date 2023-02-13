<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 09:29:26
 * @Description:
-->
<template>
  <section class="h-screen grid place-content-center">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="heading font-bold text-5xl">
        Make your links tiny and easy to share with tnyl
      </h1>
      <p class="w-10/12 mx-auto my-10 text-lg md:w-2/3">
        Transform your long, cumbersome URLs into short and shareable links with
        TinyLink
      </p>
      <NuxtLink
        :to="{
          name: 'dashboard',
        }"
        class="btn btn-primary"
        >Short Now!</NuxtLink
      >
    </div>
  </section>
</template>

<style>
.heading {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 189%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
