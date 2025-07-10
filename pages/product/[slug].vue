<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const slug = route.params.slug;

const products = [
  { name: "Chanalyzer Turbo Unit", slug: "chanalyzer-turbo-unit" },
  { name: "SuperWidget 3000", slug: "superwidget-3000" },
  { name: "MegaGadget Pro", slug: "megagadget-pro" },
  { name: "UltraAnalyzer X", slug: "ultraanalyzer-x" },
];

// Find the product by slug
const product = computed(() => products.find((p) => p.slug === slug));

const features = [
  "High performance",
  "Energy efficient",
  "Compact design",
  "User friendly interface",
];
const featuresUpper = features.map((f) => f.toUpperCase());
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-8"
  >
    <h1 class="text-3xl font-bold mb-4">
      {{ product?.name || "Product Not Found" }}
    </h1>
    <p class="text-lg mb-2">
      Slug:
      <span class="font-mono bg-gray-200 px-2 py-1 rounded">{{ slug }}</span>
    </p>

    <h2 class="text-xl font-semibold mb-2">Features:</h2>
    <ul class="list-disc pl-6">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>

    <div class="mt-6">
      <NuxtLink
        to="/product"
        class="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >Back to Products
      </NuxtLink>
    </div>
  </div>
</template>
