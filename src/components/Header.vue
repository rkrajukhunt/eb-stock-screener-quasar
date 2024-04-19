<template>
  <header class="bg-zinc-900 shadow-lg">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div>
          <!-- Your logo or site name -->
          <h1 class="text-white text-xl font-semibold cursor-pointer">
            <router-link to="/" class="hover:text-white"
              >Stock Portfolio</router-link
            >
          </h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <!-- Navigation links -->
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white"
                >About</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup></script>
