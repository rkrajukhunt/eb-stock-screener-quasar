import { defineStore } from "pinia";
import DbData from "../../db.json";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      console.log(DbData);
    },
  },
});
