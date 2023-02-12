<script setup lang="ts"></script>

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

        <button class="btn-primary w-full py-3 mt-5 rounded-full">
          Continue with Github
        </button>

        <hr class="my-8 border-white/10" />

        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jim.chen@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button
            type="submit"
            class="btn-primary w-full py-3 mt-3 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
