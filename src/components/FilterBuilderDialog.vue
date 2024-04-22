<script setup>
import { onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useStockStore } from "../stores/stockStore.js";
import { FilterMatchMode, FilterOperator } from "primevue/api";

const props = defineProps({
  activeTabIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["cancel", "apply"]);

const stockStore = useStockStore();
const { addFilter, removeFilter } = stockStore;
const { currentSelectedColumns, filters } = storeToRefs(stockStore);

const state = reactive({
  name: null,
  filters: [],
  matchModeOption: {
    string: [
      { label: "Starts With", value: "STARTS_WITH" },
      { label: "Contains", value: "CONTAINS" },
      { label: "Not Contains", value: "NOT_CONTAINS" },
      { label: "Ends With", value: "ENDS_WITH" },
      { label: "Equals", value: "EQUALS" },
      { label: "Not Equals", value: "NOT_EQUALS" },
    ],
    number: [
      { label: "Equals", value: "EQUALS" },
      { label: "Not Equals", value: "NOT_EQUALS" },
      { label: "Less Than", value: "LESS_THAN" },
      { label: "Less Than or Equal To", value: "LESS_THAN_OR_EQUAL_TO" },
      { label: "Greater Than", value: "GREATER_THAN" },
      { label: "Greater Than or Equal To", value: "GREATER_THAN_OR_EQUAL_TO" },
    ],
    date: [
      { label: "Date Is", value: "DATE_IS" },
      { label: "Date Is Not", value: "DATE_IS_NOT" },
      { label: "Date Before", value: "DATE_BEFORE" },
      { label: "Date After", value: "DATE_AFTER" },
    ],
  },
});

const onApply = () => {
  const filter = generateFilter(state.filters);
  const query = generateQuery(filter);

  const payload = {
    query,
    filter,
    isSave: true,
    name: state.name,
    id: new Date().getTime(),
  };
  addFilter(payload);

  onResetDefault();
  emit("apply");
};

const onCancel = () => {
  emit("cancel");
};

const onAddCol = () => {
  state.filters.push({
    value: null,
    column: null,
    matchMode: null,
  });
};

const onRemoveCol = (idx) => {
  state.filters.splice(idx, 1);
};

const generateFilter = (payload) => {
  const output = {};

  payload.forEach((item) => {
    const { value, column, matchMode } = item;

    // Skip processing if column or filterMode is null
    if (!column || !matchMode) {
      return;
    }

    const { field } = column;
    const { value: modeValue } = matchMode;

    if (!output[field]) {
      output[field] = { operator: FilterOperator.AND, constraints: [] };
    }

    output[field].constraints.push({
      value,
      matchMode: FilterMatchMode[modeValue],
    });
  });

  return output;
};

const generateQuery = (filter) => {
  return Object.keys(filter)
    .map((key) => {
      const {
        operator,
        constraints: [{ value, matchMode }],
      } = filter[key];
      return `[${key}] ${matchMode} "${value}" ${operator.toUpperCase()}`;
    })
    .join(" ");
};

const onResetDefault = () => {
  state.name = null;
  state.filters = [];
  onAddCol();
};

onMounted(() => {
  onResetDefault();
});
</script>

<template>
  <div></div>
  <template v-if="props.activeTabIndex === 0">
    <InputText
      class="w-full col-span-4"
      placeholder="Search"
      v-model.trim="state.name"
    />
    <Divider class="border"></Divider>
    <div class="h-[40vh] overflow-auto">
      <div v-if="filters.length === 0"></div>

      <div v-else v-for="(item, idx) in filters" :key="idx" class="py-1">
        <div
          class="flex justify-between items-center px-3 py-2 hover:rounded-md hover:bg-[#eef1f6]"
        >
          <div>
            <h2 class="text-md font-bold leading-5 text-primary capitalize">
              {{ item.name }}
            </h2>
            <h3 class="text-sm text-secondary opacity-70">
              {{ item.query }}
            </h3>
          </div>

          <Button
            class="w-full text-red-500"
            type="button"
            icon="pi pi-trash"
            outlined
            @click="removeFilter(idx)"
          />
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <InputText
      class="w-full col-span-4"
      placeholder="Enter filter name"
      v-model.trim="state.name"
    />
    <Divider></Divider>

    <div class="h-[40vh] overflow-auto">
      <div v-for="(col, idx) in state.filters" :key="idx">
        <div class="grid grid-flow-row grid-cols-12 gap-2 box-border mb-2">
          <Dropdown
            v-model="col.column"
            :options="currentSelectedColumns"
            optionLabel="headerName"
            filter
            placeholder="Select a column"
            class="w-full col-span-4"
          />

          <Dropdown
            v-if="col.column"
            v-model="col.matchMode"
            :options="state.matchModeOption[col.column.type]"
            optionLabel="label"
            placeholder="Select a column"
            class="w-full col-span-3"
          />

          <InputText
            v-model="col.value"
            v-if="col.matchMode && col.column?.type === 'string'"
            class="w-full col-span-3"
            placeholder="Enter value"
          />

          <InputNumber
            v-model="col.value"
            v-if="col.matchMode && col.column?.type === 'number'"
            class="w-full col-span-3"
            placeholder="Enter value"
            inputId="withoutgrouping"
            :useGrouping="false"
          />

          <div class="col-span-2 col-start-11 flex justify-end gap-1">
            <Button
              class="p-button-sm col-span-1 w-full"
              type="button"
              icon="pi pi-plus"
              outlined
              rounded
              @click="onAddCol"
            />
            <Button
              class="p-button-sm col-span-1 w-full"
              type="button"
              icon="pi pi-minus"
              outlined
              rounded
              :disabled="state.filters.length === 1"
              @click="onRemoveCol(idx)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>

  <div class="flex justify-end gap-2 mt-4">
    <Button
      type="button"
      :label="props.activeTabIndex === 0 ? 'Close' : 'Cancel'"
      @click="onCancel"
      severity="secondary"
    />
    <Button
      type="button"
      label="Apply"
      @click="onApply"
      :disabled="props.activeTabIndex === 0 || !state.name"
    />
  </div>
</template>
