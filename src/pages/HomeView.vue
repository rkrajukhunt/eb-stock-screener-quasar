<script setup>
import { reactive, ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
// import { useRouter } from "vue-router";
import Checkbox from "primevue/checkbox";
import DbData from "../db.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { useStockStore } from "../stores/stock";
const stockStore = useStockStore();

const gridApi = ref(null);

const state = reactive({
  search: null,
  columnDefs: stockStore.getFieldNameList,
  defaultColDef: {
    flex: 1,
    initialWidth: 300,
    filter: true,
    wrapHeaderText: true,
    autoHeaderHeight: true,
  },
  rowData: null,
  themeClass: "ag-theme-quartz",

  columnList: stockStore.getFieldNameList,
  editColumnList: [],
});

onMounted(() => {
  // edit page data
  //   const checkedFields = data.reduce((acc, item) => {
  //   if (item.isCheck) {
  //     acc.push(item.field);
  //   }
  //   return acc;
  // }, []);

  const colData = stockStore.getFieldNameList.reduce((acc, obj) => {
    if (obj.isCheck) {
      const { isCheck, ...rest } = obj;
      acc.push(rest);
    }
    return acc;
  }, []);

  state.columnDefs = colData;
});

const onGridReady = (params) => {
  gridApi.value = params.api;
  state.rowData = DbData.posts;
};

const onSaveColumns = async () => {
  const newFilterList = stockStore.getFieldNameList.map((item) => ({
    ...item,
    isCheck: state.editColumnList.includes(item.field),
  }));
  stockStore.onSortField(newFilterList);
};
const onFilter = (filterText) => {
  state.rowData = DbData.posts.filter((row) => {
    return Object.values(row).some((value) => {
      return (
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    });
  });
};
</script>

<template>
  <div>
    <div>
      <Card>
        <template #title>
          <div class="px-6 pt-6">
            <h1 class="text-4xl font-medium mb-5">Stock History</h1>
          </div>
          <Divider />
        </template>
        <template #content>
          <div class="flex justify-between mb-3 px-6">
            <div>
              <InputText
                v-model="state.search"
                @update:modelValue="onFilter"
                variant="outlined"
              ></InputText>
            </div>
            <div class="flex justify-end gap-3">
              <Button outlined>Edit Columns</Button>
            </div>
          </div>
          <div>
            <ag-grid-vue
              :class="state.themeClass"
              style="width: 100%; height: 100%"
              id="myGrid"
              ref="gridApi"
              :columnDefs="state.columnDefs"
              @grid-ready="onGridReady"
              :rowData="state.rowData"
              :defaultColDef="state.defaultColDef"
              :pagination="true"
              :paginationPageSize="10"
              domLayout="autoHeight"
              :paginationPageSizeSelector="[10, 20, 50, 100]"
            >
            </ag-grid-vue>
          </div>
        </template>
      </Card>
    </div>
    <div>
      <Card>
        <template #title>
          <div class="px-6 pt-6">
            <h1 class="text-4xl font-medium mb-5">Select Columns</h1>
          </div>
          <Divider
        /></template>
        <template #content>
          <div class="flex justify-between mb-3 px-6">
            <div
              v-for="(item, index) in state.columnList"
              :key="index"
              class="flex align-items-center"
            >
              <Checkbox
                v-model="state.editColumnList"
                :inputId="item.field"
                variant="outlined"
                name="category"
                :value="item.field"
              />
              <label :for="item.field">{{ item.headerName }}</label>
            </div>
            <div class="row w-screen pt-6 justify-center">
              <Button outlined @click="onSaveColumns">Save Columns</Button>
              <Button outlined>Cancel</Button>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<style scoped>
.ag-theme-quartz {
  /* disable all borders */
  --ag-borders: none;
  /* then add back a border between rows */
  --ag-row-border-style: solid;
  --ag-row-border-width: 1px;
  --ag-row-border-color: rgba(154, 154, 154, 0.304);
}
</style>
