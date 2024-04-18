import { defineStore } from "pinia";

export const useStockStore = defineStore("stock", {
  state: () => ({ stock: [] }),
});
