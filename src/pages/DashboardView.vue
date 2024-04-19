<template>
  <div class="p-6 capitalize">
    <Card class="shadow-2xl">
      <template #title>Stock Portfolio
        <Divider />
      </template>
      <template #content>
        <div class="px-1 grid grid-flow-row-dense grid-cols-12 gap-2">
          <Button class="col-span-1" severity="secondary" type="button" icon="pi pi-filter-slash" label="Clear"
            @click="clearFilter()" />

          <div class="col-span-2 col-start-9">
            <IconField iconPosition="left">
              <InputIcon class="pi pi-search" />
              <InputText v-model="state.filters['global'].value" placeholder="Global Search" class="w-full" />
            </IconField>
          </div>

          <Button class="col-span-2 col-start-11" type="button" icon="pi pi-filter" label="Filter Builder" outlined
            @click="onOpenFilterBuilder" />
        </div>

        <div class="px-1 pt-2 grid grid-flow-row-dense grid-cols-12 gap-2 mb-2">
          <InputText v-model="state.filters['global'].value" placeholder="Selected query filter condition"
            class="w-full cursor-not-allowed col-span-8" disabled v-if="true" />

          <Dropdown v-model="state.selectedFilter" :options="[]" placeholder="Select Filter"
            class="w-full col-span-2" />

          <MultiSelect v-model="state.selectedColumns" :options="useStock.tableColumns" filter optionLabel="headerName"
            placeholder="Select Columns" :maxSelectedLabels="3" class="w-full md:w-20rem col-span-2"
            selectedItemsLabel="Edit Columns" />
        </div>

        <DataTable paginator scrollable removableSort resizableColumns reorderableColumns size="normal"
          class="text-center" columnResizeMode="expand" tableStyle="min-width: 50rem" :rows="10"
          :value="useStock.getStockList" :rowsPerPageOptions="[5, 10, 15, 20, 50, 100]" v-model:filters="state.filters">
          <Column v-for="(col, index) of state.selectedColumns" :field="col.field" :header="col.headerName"
            :key="col.field + '_' + index" :sortable="col.sortable" :style="col.style" class="text-sm !items-center">
          </Column>
        </DataTable>
      </template>
    </Card>

    <Dialog v-model:visible="visible" modal header="Advanced Filter Builder" :style="{ width: '55rem', }" maximizable>
      <InputText class="w-full col-span-4" placeholder="Enter filter name" v-model.trim="state.filterName" />
      <Divider></Divider>

      <div class="h-[40vh] overflow-auto">
        <!-- <ScrollPanel style="width: 100%; height: 300px" class="pr-3"> -->
        <div v-for="(col, idx) in state.filterDefinition" :key="idx">
          <div class="grid grid-flow-row grid-cols-12 gap-2 box-border mb-2">
            <Dropdown v-model="col.column" :options="state.selectedColumns" optionLabel="headerName" filter
              placeholder="Select a column" class="w-full col-span-4" @change="onFilterColumnSelectionChange(col)" />

            <Dropdown v-if="col.column" v-model="col.filterMode" :options="state.filterOptions[col.column.type]" filter
              optionLabel="label" placeholder="Select a column" class="w-full col-span-3" />

            <InputText v-model="col.value" v-if="col.filterMode && col.column.type === 'string'"
              class="w-full col-span-3" placeholder="Enter value" />

            <InputNumber v-model="col.value" v-if="col.filterMode && col.column.type === 'number'"
              class="w-full col-span-3" placeholder="Enter value" inputId="withoutgrouping" :useGrouping="false" />

            <div class="col-span-2 col-start-11 flex justify-end gap-1">
              <Button class="p-button-sm col-span-1 w-full" type="button" icon="pi pi-plus" outlined rounded
                @click="onAddFilterDefinition" />
              <Button class="p-button-sm col-span-1 w-full" type="button" icon="pi pi-minus" outlined rounded
                :disabled="state.filterDefinition.length == 1" @click="onRemoveFilterDefinition(idx)" />
            </div>
          </div>
        </div>
        <!-- </ScrollPanel> -->
      </div>

      <Divider></Divider>
      <template #footer>
        <Button type="button" label="Cancel" @click="onCancelFilterBuilder" severity="secondary" />
        <Button type="button" label="Apply" @click="onApplyFilter" />
        <Button type="button" label="Save & Apply" @click="onApplyFilter" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";

import { useStockStore } from "../stores/stock.js";
const useStock = useStockStore();

const visible = ref(false);
const state = reactive({
  filters: {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  },
  filterName: null,
  filterOptions: {
    string: [
      { label: 'Starts With', value: 'STARTS_WITH' },
      { label: 'Contains', value: 'CONTAINS' },
      { label: 'Not Contains', value: 'NOT_CONTAINS' },
      { label: 'Ends With', value: 'ENDS_WITH' },
      { label: 'Equals', value: 'EQUALS' },
      { label: 'Not Equals', value: 'NOT_EQUALS' }
    ],
    number: [
      { label: 'Equals', value: 'EQUALS' },
      { label: 'Not Equals', value: 'NOT_EQUALS' },
      { label: 'Less Than', value: 'LESS_THAN' },
      { label: 'Less Than or Equal To', value: 'LESS_THAN_OR_EQUAL_TO' },
      { label: 'Greater Than', value: 'GREATER_THAN' },
      { label: 'Greater Than or Equal To', value: 'GREATER_THAN_OR_EQUAL_TO' },
      { label: 'Between', value: 'BETWEEN' },
      { label: 'In', value: 'IN' }
    ],
    date: [
      { label: 'Date Is', value: 'DATE_IS' },
      { label: 'Date Is Not', value: 'DATE_IS_NOT' },
      { label: 'Date Before', value: 'DATE_BEFORE' },
      { label: 'Date After', value: 'DATE_AFTER' }
    ],
  },
  filterDefinition: [],
  selectedColumns: useStock.tableColumns,
  selectedFilter: null,
});

onMounted(() => {
  initFilters();
});

const initFilters = () => {
  state.filters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };
  state.selectedColumns = useStock.tableColumns;
};

const clearFilter = () => {
  initFilters();
};

const onFilterColumnSelectionChange = (item) => {
  item.filterMode = null;
  item.value = null;
}

const resetFilterDefinition = () => {
  state.filterName = null;
  state.filterDefinition = [{
    value: null,
    column: null,
    filterMode: null,
  }];
}

const onOpenFilterBuilder = () => {
  resetFilterDefinition();
  visible.value = true;
}

const onCancelFilterBuilder = () => {
  resetFilterDefinition();
  visible.value = false;
}

const onAddFilterDefinition = () => {
  state.filterDefinition.push({
    value: null,
    column: null,
    filterMode: null,
  })
}

const onRemoveFilterDefinition = (idx) => {
  state.filterDefinition.splice(idx, 1);
}

const onApplyFilter = () => {
  visible.value = true;
}

</script>

<style></style>
