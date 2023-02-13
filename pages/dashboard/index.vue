<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 14:16:11
 * @Description:
-->
<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 11:39:17
 * @Description:
-->
<script setup lang="ts">
import { Database } from "~/types/supabase";

definePageMeta({
  middleware: "auth",
});

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const { data, refresh } = useAsyncData("links", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("user_id", user.value?.id);

  return data;
});
</script>

<template>
  <main class="pt-28">
    <section class="container">
      <h1 class="font-bold text-2xl text-white">Dashboard</h1>
    </section>
    <section class="container mt-10">
      <LinkForm @created="refresh" />
    </section>
    <section class="container mt-10">
      <LinkCard
        v-for="link in data"
        :key="link.id"
        :link="{
          id: link.id,
          shortKey: link.key,
          longUrl: link.long_url || '',
        }"
        class="mb-5"
      />
    </section>
  </main>
</template>
