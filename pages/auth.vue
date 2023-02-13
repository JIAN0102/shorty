<!--
 * @Author:Jim Chen
 * @Date:2023-02-13 09:10:25
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 14:09:21
 * @Description:
-->
<script setup lang="ts">
const client = useSupabaseAuthClient();

const isLoggingIn = ref<boolean>(true);
const form = reactive({
  email: "",
  password: "",
});

const errors = ref<string>("");

const handleGithubLogin = () => {
  client.auth.signInWithOAuth({
    provider: "github",
  });
};

const handleLoginForm = async () => {
  if (!form.email || !form.password) {
    errors.value = "Please fill all the fields";
    return;
  }

  if (!isLoggingIn.value) {
    return handleSignup();
  }

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
      return;
    }

    errors.value = "";

    await navigateTo("/dashboard");
  } catch (err) {
    errors.value = "Something went wrong";
  }
};

const handleSignup = async () => {
  try {
    const { data, error } = await client.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
      return;
    }

    console.log(data);

    errors.value = "Please check your email t verify your account";
  } catch (err) {
    errors.value = "Something went wrong";
  }
};
</script>

<template>
  <section class="h-screen grid place-content-center">
    <div class="container">
      <div class="card">
        <div
          class="flex justify-center items-center w-20 h-20 mx-auto border border-white/30 rounded-full shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>

        <button
          class="btn-primary w-full py-3 mt-5 rounded-full"
          @click="handleGithubLogin"
        >
          Continue with Github
        </button>

        <hr class="my-8 border-white/10" />

        <form @submit.prevent="handleLoginForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jim.chen@gmail.com"
              class="placeholder:text-white/30"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
            />
          </div>
          <button
            type="submit"
            class="btn-primary w-full py-3 mt-3 rounded-full"
          >
            {{ isLoggingIn ? "Login" : "Signup" }}
          </button>

          <div class="mt-5 text-center">
            <button type="button" @click="isLoggingIn = !isLoggingIn">
              {{
                isLoggingIn
                  ? "Don't have an account? Signup"
                  : "Already have an account? Login"
              }}
            </button>
          </div>

          <div class="mt-5 text-red-500 text-center">
            {{ errors }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
