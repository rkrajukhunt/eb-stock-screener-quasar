<script setup>
import { reactive, ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { useRouter } from "vue-router";
import DbData from "../../db.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const router = useRouter();

// const CustomHeaderButton = {
//   template: `
//     <div style="display: flex; align-items: center;">
//       <span>{{ params.displayName }}</span>
//       <button @click.stop.prevent="handleClick"  style="margin-left: 5px; ">Click Me</button>
//     </div>
//   `,
// };
const colDefsMedalsIncluded = [
  { field: "company_name", minWidth: 170, headerName: "Company Name" },
  { field: "stock_symbol" },
  { field: "average_eos_growth" },
  { field: "number_of_EPS_increases_last_20_years" },
  {
    field: "average_dividend_growth",
  },
  {
    field: "payout_ratio",
  },
  {
    field: "long_term_debt_equity_ratio",
  },
  { field: "annual_forward_dividend_vs_previous_year" },
  {
    field: "share_buyback",
  },
  { field: "P/E_ratio" },
  { field: "undervalued_vs_overvalued" },
  { field: "P/B_ratio_rule" },
  { field: "current_dividend_yield" },
  { field: "share_price" },
  { field: "annual_forward_dividend" },
];

const colDefsMedalsExcluded = [
  { field: "company_name" },
  { field: "stock_symbol" },
  { field: "average_eos_growth" },
  { field: "number_of_EPS_increases_last_20_years" },
  {
    field: "average_dividend_growth",
  },
  {
    field: "payout_ratio",
    // headerComponentParams: CustomHeaderButton,
  },
  {
    field: "long_term_debt_equity_ratio",
  },
  { field: "annual_forward_dividend_vs_previous_year" },
  {
    field: "share_buyback",
  },
  { field: "P/E_ratio" },
  { field: "undervalued_vs_overvalued" },
];

const state = reactive({
  filters: "",
  columnDefs: colDefsMedalsIncluded,
  defaultColDef: {
    flex: 1,
  },
  rowData: null,
  themeClass: "ag-theme-quartz",
});

const gridApi = ref(null);

const onBtExcludeMedalColumns = () => {
  state.columnDefs = colDefsMedalsExcluded;
};

const onBtIncludeMedalColumns = () => {
  state.columnDefs = colDefsMedalsIncluded;
};
const onGridReady = (params) => {
  gridApi.value = params.api;
  console.log(gridApi.value);
  onBtIncludeMedalColumns();
  state.rowData = DbData.posts;
};

const onFilterTextBoxChanged = (e) => {
  // gridApi.value.setGridOption(
  //   "quickFilterText",
  //   document.getElementById("filter-text-box").value
  // );
  console.log(e);
  if (gridApi.value) {
    gridApi.value.setQuickFilter(e);
  }
};

const onEditColumns = async () => {
  // await router.push({
  //   name: "editColumns",
  // });
};
</script>

<template>
  <q-page class="flex flex-center bg-slate-100">
    <div class="shadow-xl rounded-3xl w-[90vw] bg-white pb-6">
      <div class="px-6 pt-6">
        <h1 class="text-4xl font-medium mb-5">
          Low on 10 year average earnings
        </h1>
      </div>
      <q-separator class="my-3" />
      <div class="flex justify-between mb-3 px-6">
        <div>
          <q-input
            outlined
            rounded
            v-model="state.filters"
            dense
            label="Search"
            @update:model-value="(e) => onFilterTextBoxChanged(e)"
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
        <!-- <button
          class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
          v-on:click="onBtExcludeMedalColumns()"
        >
          Exclude Medal Columns
        </button> -->
        <div class="flex justify-end gap-3">
          <q-btn push color="primary" no-caps @click="onEditColumns">
            <p class="text-subtitle1 pl-1 text-sm">
              <q-icon name="edit" size="18px"></q-icon> Edit Columns
            </p>
          </q-btn>
          <q-btn push color="primary" no-caps>
            <p class="text-subtitle1 pl-1 text-sm">
              <q-icon name="system_update_alt" size="18px"></q-icon> Export
            </p>
          </q-btn>
        </div>
        <!-- <button v-on:click="onBtIncludeMedalColumns()">
          Include Medal Columns
        </button> -->
      </div>
      <div style="height: 500px; width: 90vw" class="">
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
