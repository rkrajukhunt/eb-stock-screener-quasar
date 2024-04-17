<script setup>
import { reactive } from "vue";
import { useTableStore } from "src/stores/table.js";
import { useRouter } from "vue-router";

const tableStore = useTableStore();
const router = useRouter();

const state = reactive({
  columnList: tableStore.getFieldNameList,
});

const onSaveColumns = async () => {
  tableStore.onSortField(state.columnList);
  await router.push("/");
};
</script>

<template>
  <q-page class="flex flex-center bg-slate-100">
    <div class="shadow-xl rounded-3xl w-[90vw] bg-white pb-6">
      <div class="px-6 pt-6">
        <h1 class="text-4xl font-medium mb-5">Stock scanner</h1>
      </div>
      <q-separator class="my-3" />
      <div class="flex justify-between mb-3 px-6">
        <div class="row">
          <q-col
            v-for="(item, index) in state.columnList"
            :key="index"
            class="col-4"
          >
            <q-checkbox
              v-model="item.isCheck"
              :label="item.headerName"
              class="capitalize"
            />
          </q-col>
        </div>
        <div class="row w-screen pt-6 justify-center">
          <q-col class="col-3"
            ><q-btn
              push
              color="primary"
              class="mr-3"
              no-caps
              @click="onSaveColumns"
            >
              <p class="text-subtitle1 pl-1 text-sm">
                <q-icon name="edit" size="18px"></q-icon> Save Columns
              </p>
            </q-btn>
            <q-btn
              push
              color="primary"
              no-caps
              label="Cancel"
              @click="router.push('/')"
            ></q-btn
          ></q-col>
        </div>
      </div>
    </div>
  </q-page>
</template>
