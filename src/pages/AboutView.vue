<script setup>
import { reactive, onMounted } from "vue";
import Checkbox from "primevue/checkbox";
import { useStockStore } from "../stores/stock";
import { useRouter } from "vue-router";

const stockStore = useStockStore();
const router = useRouter();

const state = reactive({
  columnList: stockStore.getFieldNameList,
  editColumnList: [],
});

onMounted(() => {
  state.editColumnList = stockStore.getFieldNameList.reduce((acc, item) => {
    if (item.isCheck) {
      acc.push(item.field);
    }
    return acc;
  }, []);
});

const onSaveColumns = async () => {
  const newFilterList = stockStore.getFieldNameList.map((item) => ({
    ...item,
    isCheck: state.editColumnList.includes(item.field),
  }));
  stockStore.onSortField(newFilterList);
  router.push("/");
};
</script>
<template>
  <div class="px-6">
    <Card>
      <template #title>
        <div class="pt-6">
          <h1 class="text-4xl font-medium mb-5">Select Columns</h1>
        </div>
        <Divider
      /></template>
      <template #content>
        <div class="flex justify-between mb-3">
          <div class="grid grid-cols-4">
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
              <label :for="item.field" class="pl-3">{{
                item.headerName
              }}</label>
            </div>
          </div>
        </div>
        <div class="pt-6">
          <Button outlined @click="onSaveColumns" class="mr-3"
            >Save Columns</Button
          >
          <Button outlined @click="router.push('/')">Cancel</Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
</script>
