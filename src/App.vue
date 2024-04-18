<template>
  <Header></Header>
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue"
defineOptions({
  name: 'App'
});
</script>
