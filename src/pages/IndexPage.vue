<script setup>
import { reactive, ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-charts-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Column Definitions: Defines the columns to be displayed.
const CustomHeaderButton = {
  template: `
    <div style="display: flex; align-items: center;">
      <span>{{ params.displayName }}</span>
      <button @click.stop.prevent="handleClick"  style="margin-left: 5px; ">Click Me</button>
    </div>
  `,
  methods: {
    handleClick() {
      console.log("Button clicked!");
    },
  },
};
const colDefsMedalsIncluded = [
  { field: "company_name", minWidth: 170 },
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
    headerComponentParams: CustomHeaderButton,
  },
  {
    field: "long_term_debt_equity_ratio",
    columnChooserParams: {
      suppressColumnFilter: true,
      suppressColumnSelectAll: true,
      suppressColumnExpandAll: true,
    },
  },
  { field: "annual_forward_dividend_vs_previous_year" },
  {
    field: "share_buyback",
  },
  { field: "P/E_ratio" },
  { field: "undervalued_vs_overvalued" },
];

const state = reactive({
  columnDefs: colDefsMedalsIncluded,
  defaultColDef: {
    flex: 1,
    // columnChooserParams: {
    //   // suppresses updating the layout of columns as they are rearranged in the grid
    //   suppressSyncLayoutWithGrid: true,
    // },
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
  console.log(params.api);

  const updateData = (data) => {
    onBtIncludeMedalColumns();
    state.rowData = data;
  };

  fetch("http://localhost:3000/posts")
    .then((resp) => resp.json())
    .then((data) => {
      updateData(data);
    });
};

const onFilterTextBoxChanged = () => {
  // gridApi.value.setGridOption(
  //   "quickFilterText",
  //   document.getElementById("filter-text-box").value
  // );
  if (gridApi.value) {
    gridApi.value.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }
};
</script>

<template>
  <q-page class="flex flex-center bg-slate-100">
    <div class="shadow-xl rounded-3xl w-[90vw] bg-white pb-6">
      <div class="row px-6 pt-6">
        <div class="col-6">
          <h1 class="text-4xl font-medium mb-5">
            Low on 10 year average earnings
          </h1>
          <p class="text-base mb-2">
            Additionally, by using a 10-year average, investors can better
            assess a company's ability to weather economic downturns and adapt
            to changing market conditions, providing a more comprehensive
            picture of its financial health and sustainability.
          </p>
          <p class="text-base">by <span class="font-medium">Pratyush</span></p>
        </div>
        <div class="col"></div>
        <div class="col-3 text-end">
          <q-btn push color="primary" no-caps>
            <p class="text-subtitle1 pl-1 text-sm">
              <q-icon name="notifications_active" size="18px"></q-icon> Get
              Email Updates
            </p>
          </q-btn>
        </div>
      </div>
      <q-separator class="my-3" />
      <div class="flex justify-end gap-3 mb-3 px-6">
        <!-- <button
          class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
          v-on:click="onBtExcludeMedalColumns()"
        >
          Exclude Medal Columns
        </button> -->
        <q-btn push color="primary" no-caps>
          <p class="text-subtitle1 pl-1 text-sm">
            <q-icon name="edit" size="18px"></q-icon> Edit Columns
          </p>
        </q-btn>
        <q-btn push color="primary" no-caps>
          <p class="text-subtitle1 pl-1 text-sm">
            <q-icon name="system_update_alt" size="18px"></q-icon> Export
          </p>
        </q-btn>
        <!-- <button v-on:click="onBtIncludeMedalColumns()">
          Include Medal Columns
        </button> -->
      </div>
      <div style="height: 500px; width: 90vw" class="">
        <span>Quick Filter:</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          v-on:input="onFilterTextBoxChanged()"
        />
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
