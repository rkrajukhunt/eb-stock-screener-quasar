<template>
  <div class="py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">About Us</h3>
          <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">Emperor Brains LLP</p> -->
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Company Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                Emperor Brains LLP
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Vision</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                We envision an ever-evolving world where businesses flourish and
                individuals realize their aspirations, empowered by our
                seamlessly integrated digital solutions.
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Mission</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                Our mission is to empower businesses of every scale with
                exceptional digital product solutions that drive growth,
                streamline operations, and elevate customer satisfaction.
              </dd>
            </div>
            <!-- Add more sections as needed -->
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
  // Add data, methods, etc. as needed
};
</script>

<style scoped>
.min-h-screen-custom {
  min-height: 91vh; /* 90% of the viewport height */
}
</style>
