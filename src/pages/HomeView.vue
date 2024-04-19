<script setup>
import { reactive, ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { useRouter } from "vue-router";

import DbData from "../db.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "primeicons/primeicons.css";
// import CustomFilter from "../components/CustomFilter.vue";

import { useStockStore } from "../stores/stock";
const stockStore = useStockStore();
const router = useRouter();

const gridApi = ref(null);
const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const state = reactive({
  search: null,
  searchQuery: null,
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
  isBuilder: false,
});

onMounted(() => {
  const colData = stockStore.getFieldNameList.reduce((acc, obj) => {
    if (obj.isCheck) {
      const { isCheck, ...rest } = obj;
      if (rest.field === "average_eos_growth") {
        acc.push({ ...rest, filter: "[average_eos_growth] === 23" });
      } else {
        acc.push({ ...rest });
      }
    }
    return acc;
  }, []);

  // console.log(gridApi.value);
  state.columnDefs = colData;
});

const onGridReady = (params) => {
  // console.log(params.api);
  // const filterModel = params.api.getFilterModel();
  // console.log("Filter Model:", filterModel);
  gridApi.value = params.api;
  state.rowData = DbData.posts;
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

const getFilterModel = () => {
  const data = {
    company_name: { type: "contains", filter: "inc" },
    // average_eos_growth: { type: "lessThan", filter: 30 },
  };

  if (gridApi.value) {
    const filterModel = gridApi.value.setFilterModel(data);
    console.log("Filter Model:", filterModel);
    return filterModel;
  }
};
</script>

<template>
  <div>
    <div>
      <!-- <Card> -->
      <!-- <template #title> -->
      <div class="px-6 pt-6">
        <h1 class="text-4xl font-medium mb-5">Stock History</h1>
      </div>
      <Divider />
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        inputClass="!p-[2px]"
        placeholder="Select a City"
        class="w-full md:w-14rem"
      />

      <!-- </template> -->
      <!-- <template #content> -->
      <div class="grid grid-flow-row-dense grid-cols-8 gap-3 mb-3 px-6">
        <div class="col-span-2">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText
              placeholder="Search"
              v-model="state.search"
              @update:modelValue="onFilter"
              variant="outlined"
              class="w-full"
            />
          </IconField>
        </div>
        <InputText
          placeholder="Search Query"
          v-model="state.searchQuery"
          variant="outlined"
          size="large"
          class="col-span-4"
        />
        <div class="flex justify-between col-span-2">
          <Button outlined label="Apply"></Button>
          <div class="flex justify-end gap-3">
            <Button
              outlined
              icon="pi pi-align-justify"
              label="Builder"
              @click="state.isBuilder = true"
            ></Button>
            <Button
              outlined
              @click="router.push('/edit-column')"
              label="Columns"
            ></Button>
            <Button icon="pi pi-filter-slash" outlined></Button>
          </div>
        </div>
      </div>
      <!-- <div class="my-3 px-6">

      </div> -->
      <div>
        <ag-grid-vue
          :class="state.themeClass"
          style="width: 100%; height: 100%"
          id="myGrid"
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
      <!-- </template> -->
      <!-- </Card> -->
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
