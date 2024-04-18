<template>
  <div>hi tushat</div>
</template>
<script setup>
const { params } = defineProps();

console.log(updateFilter);
const updateFilter = () => {
  params.filterChangedCallback();
};
</script>
