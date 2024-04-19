<script setup>
defineOptions({
  name: "AboutPage",
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            404 - Page Not Found
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            The page you are looking for does not exist.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <router-link to="/" class="text-blue-500 hover:underline"
              >Go Home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles here */
</style>
