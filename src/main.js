import { createApp } from "vue";
import "./style.css";
import AppRoot from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

import { definePreset } from "primevue/themes";
import PrimeVue from "primevue/config";
import PrimeOne from "primevue/themes/primeone";
import Aura from "primevue/themes/primeone/aura";

import Card from "primevue/card";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Dropdown from "primevue/dropdown";

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{zinc.50}",
      100: "{zinc.100}",
      200: "{zinc.200}",
      300: "{zinc.300}",
      400: "{zinc.400}",
      500: "{zinc.500}",
      600: "{zinc.600}",
      700: "{zinc.700}",
      800: "{zinc.800}",
      900: "{zinc.900}",
      950: "{zinc.950}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{zinc.950}",
          inverseColor: "#ffffff",
          hoverColor: "{zinc.900}",
          activeColor: "{zinc.800}",
        },
        highlight: {
          background: "{zinc.950}",
          focusBackground: "{zinc.700}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
      dark: {
        primary: {
          color: "{zinc.50}",
          inverseColor: "{zinc.950}",
          hoverColor: "{zinc.100}",
          activeColor: "{zinc.200}",
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
      },
    },
  },
});

const app = createApp(AppRoot);
const pinia = createPinia();
app.use(pinia);
app.use(router);

// prime vue config
app.use(PrimeVue, {
  ripple: false,
  // Default theme configuration
  theme: {
    base: PrimeOne,
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.component("Card", Card);
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Dropdown", Dropdown);
// prime vue config end

app.mount("#app");
