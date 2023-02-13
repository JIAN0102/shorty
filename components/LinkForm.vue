<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 16:05:10
 * @Description:
-->
<script setup lang="ts">
import { nanoid } from "nanoid";
import { Database } from "~/types/supabase";

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const emits = defineEmits(["created"]);

const form = reactive({
  long_url: "",
  key: "",
});

const handleLinkForm = async () => {
  try {
    const { data, error } = await client
      .from("links")
      .insert({
        long_url: form.long_url,
        key: form.key,
        user_id: user.value?.id,
      })
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    createShortKey();
    form.long_url = "";
    emits("created", 1);
  } catch (err) {}
};

const createShortKey = (len: number = 6): void => {
  form.key = nanoid(len);
};

onMounted(() => {
  createShortKey(6);
});
</script>

<template>
  <div class="card">
    <form @submit.prevent="handleLinkForm">
      <div class="flex items-end gap-5">
        <div class="w-5/12">
          <label for="url" class="text-white">Long URL</label>
          <input type="text" id="url" class="input" v-model="form.long_url" />
        </div>
        <div class="w-5/12">
          <label for="shortKey" class="text-white">Short Key</label>
          <input
            type="text"
            id="shortKey"
            class="shortKey"
            v-model="form.key"
          />
        </div>
        <div class="w-2/12">
          <button class="btn-primary w-full py-2 rounded-lg">Short</button>
        </div>
      </div>
    </form>
  </div>
</template>
