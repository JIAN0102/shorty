<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 14:20:07
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 15:25:02
 * @Description:
-->
<script setup lang="ts">
import geoip from "geoip-lite";
import { Database } from "~/types/supabase";

const { params } = useRoute();
const client = useSupabaseClient<Database>();

// Get the params id
if (!params.id) {
  throw createError({
    statusCode: 404,
    message: "Not found",
  });
}

// Fetch the data from the supabase
const { data } = await useAsyncData("link", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("key", params.id)
    .single();

  if (error) {
    throw createError({
      statusCode: 404,
      message: "Not found",
    });
  }

  return data;
});

// Redirect to the long url
if (data.value?.long_url) {
  const ua = useUserAgent();

  if (ua && ua.ip) {
    const geoLocation = geoip.lookup(ua.ip);
    await client.from("clicks").insert({
      link_id: data.value.id,
      ip: ua.ip,
      country: geoLocation?.country,
      city: geoLocation?.city,
      user_agent: ua.userAgent,
    });
  }

  useExternalRedirect(data.value?.long_url);
}
</script>

<template></template>
