import { defineStore } from "pinia";

export const useTableStore = defineStore("table", {
  state: () => ({
    fieldNameList: [
      {
        field: "company_name",
        minWidth: 170,

        headerName: "Company name",
        isCheck: true,
      },
      {
        field: "stock_symbol",
        headerName: "Stock symbol",
        isCheck: true,
        minWidth: 90,
      },
      {
        field: "average_eos_growth",
        headerName: "average eos growth",
        isCheck: true,
        minWidth: 90,
      },
      {
        field: "number_of_EPS_increases_last_20_years",
        headerName: "number of EPS increases last 20 years",
        isCheck: true,
        minWidth: 110,
      },
      {
        field: "average_dividend_growth",
        headerName: "average dividend growth",
        isCheck: true,
        minWidth: 90,
      },
      {
        field: "payout_ratio",
        headerName: "payout ratio",
        isCheck: true,
        minWidth: 80,
      },
      {
        field: "long_term_debt_equity_ratio",
        headerName: "long term debt equity ratio",
        isCheck: true,
        minWidth: 115,
      },
      {
        field: "annual_forward_dividend_vs_previous_year",
        headerName: "annual forward dividend vs previous year",
        isCheck: true,
        minWidth: 115,
      },
      {
        field: "share_buyback",
        headerName: "Share buyback",
        isCheck: true,
        minWidth: 90,
      },
      {
        field: "P/E_ratio",
        headerName: "P/E ratio",
        isCheck: true,
        minWidth: 70,
      },
      {
        field: "undervalued_vs_overvalued",
        headerName: "Undervalued vs overvalued",
        isCheck: true,
        minWidth: 120,
      },
      {
        field: "P/B_ratio_rule",
        headerName: "P/B ratio rule",
        isCheck: true,
        minWidth: 90,
      },
      {
        field: "current_dividend_yield",
        headerName: "Current dividend yield",
        isCheck: true,
        minWidth: 95,
      },
      {
        field: "share_price",
        headerName: "Share price",
        isCheck: true,
        minWidth: 80,
      },
      {
        field: "annual_forward_dividend",
        headerName: "Annual forward dividend",
        isCheck: true,
        minWidth: 92,
      },
    ],
  }),
  getters: {
    getFieldNameList: (state) => state.fieldNameList,
  },
  mutations: {},
  actions: {
    onSortField(list) {
      this.fieldNameList = list;
    },
  },
});
