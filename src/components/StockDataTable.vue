<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useStockStore } from "../stores/stockStore.js";

const stockStore = useStockStore();
const { stockList, currentSelectedColumns } = storeToRefs(stockStore);

const state = reactive({
  pageable: {
    perPage: 10,
    rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
  },
  items: [],
  columns: [],
});


</script>

<template>
  <DataTable
    paginator
    scrollable
    removableSort
    resizableColumns
    reorderableColumns
    class="text-center"
    columnResizeMode="expand"
    tableStyle="min-width: 50rem"
    :value="stockList"
    :rows="state.pageable.perPage"
    :rowsPerPageOptions="state.pageable.rowsPerPageOptions"
  >
    <Column
      v-for="(col, index) of currentSelectedColumns"
      :field="col.field"
      :style="col.style"
      :header="col.headerName"
      :sortable="col.sortable"
      :key="col.field + '_' + index"
      class="text-sm !items-center"
    >
    </Column>
  </DataTable>
</template>

<style scoped></style>
