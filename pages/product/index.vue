<script setup>
const products = [
  { name: "Chanalyzer Turbo Unit", slug: "chanalyzer-turbo-unit" },
  { name: "SuperWidget 3000", slug: "superwidget-3000" },
  { name: "MegaGadget Pro", slug: "megagadget-pro" },
  { name: "UltraAnalyzer X", slug: "ultraanalyzer-x" },
];
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full bg-gray-800 min-h-screen text-white p-8"
  >
    <h1 class="text-3xl font-bold mb-6">Product Page</h1>
    <ul class="space-y-4 w-full max-w-md">
      <li
        v-for="product in products"
        :key="product.slug"
        class="bg-gray-700 rounded p-4 flex justify-between items-center"
      >
        <span>{{ product.name }}</span>
        <NuxtLink
          :to="`/product/${product.slug}`"
          class="text-blue-300 hover:underline"
          >View Details</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
