<script setup>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";

import { useStockStore } from "../stores/stockStore.js";
import EditColumnDialog from "./EditColumnDialog.vue";
import FilterBuilderDialog from "./FilterBuilderDialog.vue";

const emit = defineEmits(["clear", "update:search", "update:filter"]);

const stockStore = useStockStore();
const { filters } = storeToRefs(stockStore);

const props = defineProps({
  search: String,
  filter: Object,
});

const tabItems = ref([
  { label: "Existing filter", icon: "pi pi-pen-to-square" },
  { label: "Create new filter", icon: "pi pi-file-plus" },
]);

const state = reactive({
  activeTabIndex: 0,
  ediColDialog: false,
  filterDialog: false,
  selectedFilterItem: null,
});

const clearFilter = () => {
  emit("clear");
};

const onFilterChange = (val) => {
  emit("update:filter", val);
};
</script>

<template>
  <div class="capitalize">
    <div class="px-1 grid grid-flow-row-dense grid-cols-12 gap-2">
      <div class="col-span-3">
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText
            class="w-full"
            placeholder="Global Search"
            :value="props.search"
            @input="emit('update:search', $event.target.value)"
          />
        </IconField>
      </div>

      <Dropdown
        showClear
        :options="filters"
        :model-value="props.filter"
        placeholder="Select Filter"
        optionLabel="name"
        class="w-full col-span-3"
        @update:modelValue="onFilterChange"
      />

      <Button
        class="col-span-2"
        type="button"
        icon="pi pi-filter"
        label="Filter Builder"
        outlined
        @click="state.filterDialog = true"
      />

      <Button
        class="col-span-2"
        type="button"
        icon="pi pi-cog"
        label="Edit Columns"
        @click="state.ediColDialog = true"
        outlined
      />

      <Button
        class="col-span-2"
        severity="secondary"
        type="button"
        icon="pi pi-filter-slash"
        label="Clear"
        @click="clearFilter"
      />
    </div>

    <div class="px-1 pt-2 mb-2">
      <InputText
        :value="props.filter?.query"
        placeholder="Query"
        class="w-full cursor-not-allowed"
        disabled
      />
    </div>

    <Dialog
      v-model:visible="state.filterDialog"
      modal
      :style="{ width: '55rem' }"
      @hide="state.activeTabIndex = 0"
      class="capitalize"
    >
      <template #header>
        <TabMenu
          v-model:activeIndex="state.activeTabIndex"
          :model="tabItems"
          class="w-[99%]"
        >
        </TabMenu>
      </template>
      <FilterBuilderDialog
        :active-tab-index="state.activeTabIndex"
        @cancel="state.filterDialog = false"
        @apply="state.activeTabIndex = 0"
      ></FilterBuilderDialog>
    </Dialog>

    <Dialog
      v-model:visible="state.ediColDialog"
      modal
      header="Edit Columns"
      :style="{ width: '30rem' }"
    >
      <EditColumnDialog
        @cancel="state.ediColDialog = false"
        @apply="state.ediColDialog = false"
      ></EditColumnDialog>
    </Dialog>
  </div>
</template>

<style scoped></style>
