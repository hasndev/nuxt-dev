<template>
  <div>
    <Head>
      <Title>Nuxt Dev - {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(url, { key: id });

useHead({
  title: "Nuxt Dev - Product Details",
  meta: [{ name: "description", content: "Products Page" }],
});

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
