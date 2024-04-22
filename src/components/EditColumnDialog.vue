<script setup>
import { onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useStockStore } from "../stores/stockStore.js";

const stockStore = useStockStore();
const emit = defineEmits(["cancel", "apply"]);

const { setCurrentSelectedColumns } = stockStore;
const { currentSelectedColumns, defaultColumns, columnsFieldsList } =
  storeToRefs(stockStore);

const state = reactive({
  selectedColumns: [],
});

onMounted(() => {
  state.selectedColumns = currentSelectedColumns.value;
});

const onResetDefault = () => {
  setCurrentSelectedColumns(defaultColumns.value);
  emit("cancel");
};

const onApply = () => {
  setCurrentSelectedColumns(state.selectedColumns);
  emit("apply");
};

const onCancel = () => {
  emit("cancel");
};
</script>

<template>
  <div>
    <div class="py-2">
      <MultiSelect
        filter
        key="col-selection"
        optionLabel="headerName"
        placeholder="Select Columns"
        selectedItemsLabel="{0} Column Selected"
        class="w-full md:w-20rem col-span-3"
        v-model="state.selectedColumns"
        :maxSelectedLabels="3"
        :options="columnsFieldsList"
      />
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="onCancel()"
      />
      <Button
        type="button"
        label="Reset"
        severity="secondary"
        @click="onResetDefault()"
      />
      <Button type="button" label="Apply" @click="onApply()" />
    </div>
  </div>
</template>
