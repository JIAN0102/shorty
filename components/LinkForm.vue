<template>
  <div class="card">
    <form>
      <div class="flex items-end gap-5">
        <div class="w-5/12">
          <label for="url" class="text-white">Long URL</label>
          <input type="text" id="url" class="input" />
        </div>
        <div class="w-5/12">
          <label for="shortKey" class="text-white">Short Key</label>
          <input type="text" id="shortKey" class="shortKey" />
        </div>
        <div class="w-2/12">
          <button class="btn-primary w-full py-2 rounded-lg">Short</button>
        </div>
      </div>
    </form>
  </div>
</template>
