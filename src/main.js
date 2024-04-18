import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import MyPreset from "./mypreset/index.js";

import PrimeVue from "primevue/config";
import PrimeOne from 'primevue/themes/primeone';

import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Dropdown from "primevue/dropdown";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const pinia = createPinia();
const app = createApp(App);

app.component("Row", Row);
app.component("Card", Card);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Column", Column);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("Checkbox ", Checkbox);
app.component("InputText", InputText);
app.component("DataTable", DataTable);
app.component("ColumnGroup", ColumnGroup);


app.use(PrimeVue, {
  theme: {
    base: PrimeOne,
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    }
  }
});

app.use(pinia);
app.use(router);
app.mount("#app");
