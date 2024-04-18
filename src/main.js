import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

import PrimeVue from "primevue/config";

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
import MyPreset from "./mypreset";

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
  unstyled: true,
  pt: MyPreset,
});

app.use(pinia);
app.use(router);
app.mount("#app");
