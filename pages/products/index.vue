<template>
  <div>
    <h2>All Products</h2>
    <div class="grid grid-cols-4 gap-5 justify-center">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

//Fetch All Products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Nuxt Dev - Products",
  meta: [{ name: "description", content: "Products Page" }],
});
</script>

<style scoped></style>
