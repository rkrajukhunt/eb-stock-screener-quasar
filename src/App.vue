<script setup>
import EbHeader from "./components/Header.vue";
defineOptions({
  name: "App",
});
</script>

<template>
  <eb-header></eb-header>
  <router-view />
</template>
