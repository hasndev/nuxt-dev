<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold">Currency Conversion</h1>

    <div class="mt-4">
      <label for="amount" class="block">Enter Amount (USD):</label>
      <input
        v-model="amount"
        type="number"
        id="amount"
        class="border border-gray-300 rounded px-2 py-1"
      />
    </div>

    <div class="mt-4">
      <label for="currency" class="block">Select Currency:</label>
      <select
        v-model="selectedCurrency"
        id="currency"
        class="border border-gray-300 rounded px-2 py-1"
      >
        <option
          v-for="(currency, code) in currencies"
          :key="code"
          :value="code"
        >
          {{ currency.code }}
        </option>
      </select>
    </div>

    <div class="mt-4">
      <p class="text-lg font-semibold">Result:</p>
      <p class="text-xl mt-2">{{ convertedAmount }} {{ selectedCurrency }}</p>
    </div>
  </div>
</template>

<script setup>
const amount = ref(1);
const selectedCurrency = ref("EUR");
const currencies = {
  EUR: { code: "EUR", value: 0.9499601497 },
  IQD: { code: "IQD", value: 1307.3071233403 },
  // Add more currencies here
};

const convertedAmount = computed(() => {
  const selectedCurrencyData = currencies[selectedCurrency.value];
  return (amount.value * selectedCurrencyData.value).toFixed(2);
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
