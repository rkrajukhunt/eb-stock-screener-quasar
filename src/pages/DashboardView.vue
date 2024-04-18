<template>
  <div class="p-6 capitalize">
    <Card class="shadow-2xl">
      <template #title>Growth Stocks
        <Divider />
      </template>
      <template #subtitle></template>
      <template #content>
        <DataTable paginator scrollable removableSort resizableColumns reorderableColumns size="small"
          class="text-center" scrollHeight="500px" columnResizeMode="expand" tableStyle="min-width: 50rem" :rows="10"
          :value="useStock.getStockList" :rowsPerPageOptions="[5, 10, 20, 50]" v-model:filters="state.filters">
          <Column v-for="(col, index) of state.selectedColumns" :field="col.field" :header="col.headerName"
            :key="col.field + '_' + index" :sortable="col.sortable" :style="col.style" class="text-sm !items-center">
          </Column>
        </DataTable>
      </template>
      <template #footer v-if="false">
        <div class="flex gap-3 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { FilterMatchMode, FilterOperator } from 'primevue/api';

import { useStockStore } from "../stores/stock.js"

// const toast = useToast();
const useStock = useStockStore();

const state = reactive({
  filters: null,
  selectedColumns: useStock.tableColumns
})

const initFilters = () => {
  state.filters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };
};

const clearFilter = () => {
  initFilters();
};

onMounted(() => {
  initFilters();
})

</script>

<style></style>
