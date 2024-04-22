import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useStockStore = defineStore("manageStock", () => {
  const stockList = ref([
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      avg_eos_growth: 15,
      num_eps_inc_last_20y: 18,
      avg_div_growth: 10,
      payout_ratio: 0.3,
      lt_debt_eq_ratio: 0.5,
      annual_fwd_div_vs_prev_year: 5,
      share_buyback: 1000000,
      pe_ratio: 25,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 4,
      curr_div_yield: 1.5,
      price: 150,
      annual_fwd_div: 2,
    },
    {
      name: "Microsoft Corporation",
      symbol: "MSFT",
      avg_eos_growth: 12,
      num_eps_inc_last_20y: 20,
      avg_div_growth: 8,
      payout_ratio: 0.35,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 4,
      share_buyback: 800000,
      pe_ratio: 30,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 5,
      curr_div_yield: 1.7,
      price: 300,
      annual_fwd_div: 3,
    },
    {
      name: "Amazon.com Inc.",
      symbol: "AMZN",
      avg_eos_growth: 20,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 0,
      payout_ratio: 0,
      lt_debt_eq_ratio: 0.2,
      annual_fwd_div_vs_prev_year: 0,
      share_buyback: 1200000,
      pe_ratio: 80,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 20,
      curr_div_yield: 0,
      price: 4000,
      annual_fwd_div: 0,
    },
    {
      name: "Alphabet Inc.",
      symbol: "GOOGL",
      avg_eos_growth: 18,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 5,
      payout_ratio: 0.25,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 500000,
      pe_ratio: 35,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 6,
      curr_div_yield: 1.2,
      price: 1800,
      annual_fwd_div: 1.5,
    },
    {
      name: "Facebook, Inc.",
      symbol: "FB",
      avg_eos_growth: 22,
      num_eps_inc_last_20y: 14,
      avg_div_growth: 4,
      payout_ratio: 0.2,
      lt_debt_eq_ratio: 0.25,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 600000,
      pe_ratio: 40,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 8,
      curr_div_yield: 0.8,
      price: 320,
      annual_fwd_div: 1,
    },
    {
      name: "Tesla, Inc.",
      symbol: "TSLA",
      avg_eos_growth: 25,
      num_eps_inc_last_20y: 10,
      avg_div_growth: 0,
      payout_ratio: 0,
      lt_debt_eq_ratio: 0.6,
      annual_fwd_div_vs_prev_year: 0,
      share_buyback: 200000,
      pe_ratio: 100,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 15,
      curr_div_yield: 0,
      price: 800,
      annual_fwd_div: 0,
    },
    {
      name: "Procter & Gamble Co",
      symbol: "PG",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 18,
      avg_div_growth: 7,
      payout_ratio: 0.45,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 4,
      share_buyback: 300000,
      pe_ratio: 22,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 5,
      curr_div_yield: 2.2,
      price: 110,
      annual_fwd_div: 2.8,
    },
    {
      name: "Walmart Inc.",
      symbol: "WMT",
      avg_eos_growth: 5,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 4,
      payout_ratio: 0.35,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 200000,
      pe_ratio: 18,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 2.5,
      price: 90,
      annual_fwd_div: 2,
    },
    {
      name: "Visa Inc.",
      symbol: "V",
      avg_eos_growth: 18,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 8,
      payout_ratio: 0.2,
      lt_debt_eq_ratio: 0.2,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 500000,
      pe_ratio: 45,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 10,
      curr_div_yield: 0.8,
      price: 200,
      annual_fwd_div: 1.6,
    },
    {
      name: "JPMorgan Chase & Co.",
      symbol: "JPM",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 5,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.35,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 700000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 2,
      curr_div_yield: 2,
      price: 100,
      annual_fwd_div: 2,
    },
    {
      name: "Coca-Cola Company",
      symbol: "KO",
      avg_eos_growth: 5,
      num_eps_inc_last_20y: 18,
      avg_div_growth: 6,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 200000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 4,
      curr_div_yield: 3,
      price: 80,
      annual_fwd_div: 2.4,
    },
    {
      name: "The Home Depot, Inc.",
      symbol: "HD",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 7,
      payout_ratio: 0.45,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 4,
      share_buyback: 300000,
      pe_ratio: 25,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 6,
      curr_div_yield: 2,
      price: 120,
      annual_fwd_div: 3,
    },
    {
      name: "Merck & Co., Inc.",
      symbol: "MRK",
      avg_eos_growth: 6,
      num_eps_inc_last_20y: 19,
      avg_div_growth: 5,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.35,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 400000,
      pe_ratio: 18,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 3.2,
      price: 90,
      annual_fwd_div: 2.8,
    },
    {
      name: "Abbott Laboratories",
      symbol: "ABT",
      avg_eos_growth: 7,
      num_eps_inc_last_20y: 17,
      avg_div_growth: 6,
      payout_ratio: 0.45,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 250000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 4,
      curr_div_yield: 2.5,
      price: 100,
      annual_fwd_div: 2.5,
    },
    {
      name: "Mastercard Incorporated",
      symbol: "MA",
      avg_eos_growth: 15,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 7,
      payout_ratio: 0.25,
      lt_debt_eq_ratio: 0.2,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 500000,
      pe_ratio: 50,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 12,
      curr_div_yield: 0.7,
      price: 250,
      annual_fwd_div: 1.8,
    },
    {
      name: "The Walt Disney Company",
      symbol: "DIS",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 5,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 500000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 4,
      curr_div_yield: 1.8,
      price: 150,
      annual_fwd_div: 2,
    },
    {
      name: "Netflix, Inc.",
      symbol: "NFLX",
      avg_eos_growth: 18,
      num_eps_inc_last_20y: 12,
      avg_div_growth: 0,
      payout_ratio: 0,
      lt_debt_eq_ratio: 0.1,
      annual_fwd_div_vs_prev_year: 0,
      share_buyback: 700000,
      pe_ratio: 70,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 18,
      curr_div_yield: 0,
      price: 600,
      annual_fwd_div: 0,
    },
    {
      name: "Exxon Mobil Corporation",
      symbol: "XOM",
      avg_eos_growth: 5,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 3,
      payout_ratio: 0.6,
      lt_debt_eq_ratio: 0.5,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 400000,
      pe_ratio: 15,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 1,
      curr_div_yield: 5,
      price: 80,
      annual_fwd_div: 4,
    },
    {
      name: "AT&T Inc.",
      symbol: "T",
      avg_eos_growth: 2,
      num_eps_inc_last_20y: 10,
      avg_div_growth: 2,
      payout_ratio: 0.7,
      lt_debt_eq_ratio: 0.6,
      annual_fwd_div_vs_prev_year: 1,
      share_buyback: 200000,
      pe_ratio: 10,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 1,
      curr_div_yield: 6,
      price: 40,
      annual_fwd_div: 2.5,
    },
    {
      name: "Pfizer Inc.",
      symbol: "PFE",
      avg_eos_growth: 7,
      num_eps_inc_last_20y: 18,
      avg_div_growth: 4,
      payout_ratio: 0.5,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 300000,
      pe_ratio: 15,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 4,
      price: 60,
      annual_fwd_div: 2.4,
    },
    {
      name: "Intel Corporation",
      symbol: "INTC",
      avg_eos_growth: 8,
      num_eps_inc_last_20y: 17,
      avg_div_growth: 4,
      payout_ratio: 0.35,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 400000,
      pe_ratio: 15,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 2.5,
      price: 60,
      annual_fwd_div: 1.5,
    },
    {
      name: "Verizon Communications Inc.",
      symbol: "VZ",
      avg_eos_growth: 5,
      num_eps_inc_last_20y: 14,
      avg_div_growth: 3,
      payout_ratio: 0.5,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 300000,
      pe_ratio: 15,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 4,
      price: 60,
      annual_fwd_div: 2.4,
    },
    {
      name: "UnitedHealth Group Incorporated",
      symbol: "UNH",
      avg_eos_growth: 12,
      num_eps_inc_last_20y: 17,
      avg_div_growth: 6,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 400000,
      pe_ratio: 30,
      uv_vs_ov: "Overvalued",
      pb_ratio_rule: 5,
      curr_div_yield: 1.8,
      price: 300,
      annual_fwd_div: 2.2,
    },
    {
      name: "AbbVie Inc.",
      symbol: "ABBV",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 7,
      payout_ratio: 0.5,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 200000,
      pe_ratio: 12,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 2,
      curr_div_yield: 4,
      price: 120,
      annual_fwd_div: 3,
    },
    {
      name: "Caterpillar Inc.",
      symbol: "CAT",
      avg_eos_growth: 5,
      num_eps_inc_last_20y: 14,
      avg_div_growth: 3,
      payout_ratio: 0.6,
      lt_debt_eq_ratio: 0.5,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 300000,
      pe_ratio: 15,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 1.5,
      curr_div_yield: 3,
      price: 90,
      annual_fwd_div: 2.4,
    },
    {
      name: "Walt Disney",
      symbol: "DIS",
      avg_eos_growth: 10,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 5,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.3,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 500000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 4,
      curr_div_yield: 1.8,
      price: 150,
      annual_fwd_div: 2,
    },
    {
      name: "Johnson & Johnson",
      symbol: "JNJ",
      avg_eos_growth: 8,
      num_eps_inc_last_20y: 20,
      avg_div_growth: 6,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.35,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 400000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 2,
      price: 100,
      annual_fwd_div: 2.5,
    },
    {
      name: "Cisco Systems, Inc.",
      symbol: "CSCO",
      avg_eos_growth: 6,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 3,
      payout_ratio: 0.45,
      lt_debt_eq_ratio: 0.35,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 200000,
      pe_ratio: 18,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 2,
      curr_div_yield: 2.5,
      price: 45,
      annual_fwd_div: 1.5,
    },
    {
      name: "Bank of America Corporation",
      symbol: "BAC",
      avg_eos_growth: 8,
      num_eps_inc_last_20y: 15,
      avg_div_growth: 4,
      payout_ratio: 0.4,
      lt_debt_eq_ratio: 0.35,
      annual_fwd_div_vs_prev_year: 2,
      share_buyback: 600000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 2,
      curr_div_yield: 2,
      price: 100,
      annual_fwd_div: 2,
    },
    {
      name: "General Electric Company",
      symbol: "GE",
      avg_eos_growth: 2,
      num_eps_inc_last_20y: 12,
      avg_div_growth: 1,
      payout_ratio: 0.8,
      lt_debt_eq_ratio: 0.7,
      annual_fwd_div_vs_prev_year: 1,
      share_buyback: 100000,
      pe_ratio: 8,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 0.5,
      curr_div_yield: 3,
      price: 24,
      annual_fwd_div: 0.7,
    },
    {
      name: "3M Company",
      symbol: "MMM",
      avg_eos_growth: 6,
      num_eps_inc_last_20y: 16,
      avg_div_growth: 5,
      payout_ratio: 0.5,
      lt_debt_eq_ratio: 0.4,
      annual_fwd_div_vs_prev_year: 3,
      share_buyback: 400000,
      pe_ratio: 20,
      uv_vs_ov: "Undervalued",
      pb_ratio_rule: 3,
      curr_div_yield: 3,
      price: 120,
      annual_fwd_div: 3,
    },
  ]);

  const defaultColumnFields = ["name", "symbol", "price", "payout_ratio"];
  const columnsFieldsList = ref([
    {
      colId: 1,
      field: "name",
      headerName: "Company name",
      sortable: true,
      style: "min-width: 250px",
      type: "string",
      default: true,
    },
    {
      colId: 2,
      field: "symbol",
      headerName: "Stock symbol",
      sortable: true,
      type: "string",
      default: true,
    },
    {
      colId: 14,
      field: "price",
      headerName: "Price",
      sortable: true,
      type: "number",
      default: true,
    },
    {
      colId: 3,
      field: "avg_eos_growth",
      headerName: "Avg EOS Growth",
      sortable: true,
      type: "number",
      default: false,
    },
    {
      colId: 4,
      field: "num_eps_inc_last_20y",
      headerName: "Num EPS Inc Last 20y",
      sortable: true,
      style: "min-width: 100px",
      type: "number",
      default: false,
    },
    {
      colId: 5,
      field: "avg_div_growth",
      headerName: "Avg Div Growth",
      sortable: true,
      type: "number",
      default: false,
    },
    {
      colId: 6,
      field: "payout_ratio",
      headerName: "Payout Ratio",
      sortable: true,
      type: "number",
      default: true,
    },
    {
      colId: 7,
      field: "lt_debt_eq_ratio",
      headerName: "LTD/EQ ratio",
      sortable: true,
      type: "number",
      default: true,
    },
    {
      colId: 8,
      field: "annual_fwd_div_vs_prev_year",
      headerName: "AFD vs PY",
      sortable: true,
      type: "number",
      default: false,
    },
    {
      colId: 9,
      field: "share_buyback",
      headerName: "Share Buyback",
      sortable: true,
      type: "number",
      default: true,
    },
    {
      colId: 10,
      field: "pe_ratio",
      headerName: "P/E Ratio",
      sortable: true,
      type: "number",
      default: true,
    },
    {
      colId: 11,
      field: "uv_vs_ov",
      headerName: "Undervalued vs Overvalued",
      style: "min-width: 300px",
      type: "string",
      sortable: true,
      default: false,
    },
    {
      colId: 12,
      field: "pb_ratio_rule",
      headerName: "P/B Ratio Rule",
      sortable: true,
      type: "number",
      default: false,
    },
    {
      colId: 13,
      field: "curr_div_yield",
      headerName: "Curr Div Yield",
      sortable: true,
      type: "number",
      default: false,
    },
    {
      colId: 15,
      field: "annual_fwd_div",
      headerName: "Annual Fwd Div",
      sortable: true,
      type: "number",
      default: false,
    },
  ]);

  // state
  const filters = ref([]);
  const selectedColumns = ref([]);

  // getters
  const defaultColumns = computed(() => {
    return (
      columnsFieldsList.value.filter((column) =>
        defaultColumnFields.includes(column.field)
      ) ?? []
    );
  });

  // Use computed property for currentSelectedColumns
  const currentSelectedColumns = computed(() => {
    const selected = selectedColumns.value || [];
    const defaults = defaultColumns.value || [];
    return selected.length > 0 ? selected : defaults;
  });

  // actions
  const setCurrentSelectedColumns = (columns) => {
    selectedColumns.value = columns;
  };

  const addFilter = (filter) => {
    filters.value.push(filter);
  };

  const removeFilter = (filterIdx) => {
    filters.value.splice(filterIdx, 1);
  };

  return {
    stockList,
    filters,
    defaultColumns,
    selectedColumns,
    columnsFieldsList,
    currentSelectedColumns,
    addFilter,
    removeFilter,
    setCurrentSelectedColumns,
  };
});
