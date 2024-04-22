<script setup>
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import StockFilters from "./StockFilters.vue";
import { useStockStore } from "../stores/stockStore.js";

const stockStore = useStockStore();
const { stockList, currentSelectedColumns } = storeToRefs(stockStore);

const selectedFilter = ref(null);
const globalSearch = ref(null);

const pageable = reactive({
  perPage: 10,
  rowsPerPageOptions: [10, 15, 20, 50, 100],
});

const filters = computed(() => {
  const global = {
    value: globalSearch.value || null,
    matchMode: FilterMatchMode.CONTAINS,
  };
  let filter = {};

  if (selectedFilter?.value?.filter) {
    filter = {
      ...selectedFilter?.value?.filter,
    };
  }

  filter.global = global;
  return filter;
});

const onClearFilter = () => {
  globalSearch.value = null;
  selectedFilter.value = null;
};
</script>

<template>
  <div class="capitalize">
    <stock-filters
      @clear="onClearFilter"
      v-model:filter="selectedFilter"
      v-model:search="globalSearch"
    >
    </stock-filters>

    <DataTable
      paginator
      scrollable
      removableSort
      resizableColumns
      reorderableColumns
      class="text-center"
      columnResizeMode="expand"
      tableStyle="min-width: 50rem"
      :filters="filters"
      :value="stockList"
      :rows="pageable.perPage"
      :rowsPerPageOptions="pageable.rowsPerPageOptions"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Stocks "
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

      <template #empty> No stocks found. </template>
    </DataTable>
  </div>
</template>

<style scoped></style>
