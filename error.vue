<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-red-500">
        Error - {{ error.statusCode }}
      </h1>
      <p class="text-2xl text-gray-600 mt-4">Oops! Something went wrong.</p>
      <p class="text-xl text-gray-600 mt-2">{{ error.message }}</p>
      <NuxtLink to="/" class="text-blue-500 mt-4 hover:underline"
        >Go back to the home page</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style lang="scss" scoped></style>
