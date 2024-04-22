<script setup>
import StockFilters from "./StockFilters.vue";
import StockDataTable from "./StockDataTable.vue";
</script>

<template>
  <Card class="shadow-2xl">
    <template #title>
      Manage Stocks
      <Divider />
    </template>
    <template #content>
      <stock-filters></stock-filters>
      <stock-data-table></stock-data-table>
    </template>
  </Card>
</template>

<style scoped>

</style>
