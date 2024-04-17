<script setup>
import { reactive, ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { useRouter } from "vue-router";
import DbData from "../../db.json";
import { useTableStore } from "src/stores/table.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const router = useRouter();
const tableStore = useTableStore();

// const CustomHeaderButton = {
//   template: `
//     <div style="display: flex; align-items: center;">
//       <span>{{ params.displayName }}</span>
//       <button @click.stop.prevent="handleClick"  style="margin-left: 5px; ">Click Me</button>
//     </div>
//   `,
// };

// const colDefsMedalsExcluded = [
//   { field: "company_name" },
//   { field: "stock_symbol" },
//   { field: "average_eos_growth" },
//   { field: "number_of_EPS_increases_last_20_years" },
//   {
//     field: "average_dividend_growth",
//   },
//   {
//     field: "payout_ratio",
//   },
//   {
//     field: "long_term_debt_equity_ratio",
//   },
//   { field: "annual_forward_dividend_vs_previous_year" },
//   {
//     field: "share_buyback",
//   },
//   { field: "P/E_ratio" },
//   { field: "undervalued_vs_overvalued" },
// ];

const state = reactive({
  search: null,
  columnDefs: tableStore.getFieldNameList,
  defaultColDef: {
    flex: 1,
    initialWidth: 300,
    wrapHeaderText: true,
    autoHeaderHeight: true,
  },
  rowData: null,
  themeClass: "ag-theme-quartz",
});

const gridApi = ref(null);

onMounted(() => {
  const colData = tableStore.getFieldNameList.reduce((acc, obj) => {
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

const onEditColumns = async () => {
  await router.push({
    name: "editColumns",
  });
};
</script>

<template>
  <q-page class="flex flex-center bg-slate-100 capitalize">
    <div class="shadow-xl rounded-3xl w-[90vw] bg-white pb-6">
      <div class="px-6 pt-6">
        <h1 class="text-4xl font-medium mb-5">Stock scanner</h1>
      </div>
      <q-separator class="my-3" />
      <div class="flex justify-between mb-3 px-6">
        <div>
          <q-input
            outlined
            rounded
            v-model="state.search"
            dense
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon
                v-if="state.filters !== ''"
                name="close"
                @click="state.filters = ''"
                class="cursor-pointer"
              />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="flex justify-end gap-3">
          <q-btn push color="primary" no-caps @click="onEditColumns">
            <p class="text-subtitle1 pl-1 text-sm">
              <q-icon name="edit" size="18px"></q-icon> Edit Columns
            </p>
          </q-btn>
          <q-btn push disabled color="primary" no-caps>
            <p class="text-subtitle1 pl-1 text-sm">
              <q-icon name="filter_alt" size="18px"></q-icon> Filter
            </p>
          </q-btn>
        </div>
      </div>
      <div style="height: 500px; width: 90vw">
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
          :paginationAutoPageSize="true"
        >
        </ag-grid-vue>
      </div>
    </div>
  </q-page>
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
