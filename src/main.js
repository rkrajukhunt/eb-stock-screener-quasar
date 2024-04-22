import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./style.css";
import MyPreset from "./mypreset/index.js";

import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import PrimeOne from "primevue/themes/primeone";

import Row from "primevue/row";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Column from "primevue/column";
import TabMenu from 'primevue/tabmenu';
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import MultiSelect from "primevue/multiselect";
import InputNumber from "primevue/inputnumber";
import ScrollPanel from "primevue/scrollpanel";
import ColumnGroup from "primevue/columngroup";

const pinia = createPinia();
const app = createApp(App);

app.component("Row", Row);
app.component("Card", Card);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Column", Column);
app.component("Divider", Divider);
app.component("TabMenu", TabMenu);
app.component("Dropdown", Dropdown);
app.component("Checkbox ", Checkbox);
app.component("DataTable", DataTable);
app.component("InputText", InputText);
app.component("InputIcon", InputIcon);
app.component("IconField", IconField);
app.component("MultiSelect", MultiSelect);
app.component("ScrollPanel", ScrollPanel);
app.component("InputNumber", InputNumber);
app.component("ColumnGroup", ColumnGroup);

app.use(PrimeVue, {
  theme: {
    base: PrimeOne,
    preset: MyPreset,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: false,
    },
    components: {
      Button: {
        // Adjust the size of all buttons globally
        size: "small", // or 'large' or 'medium' as per your requirement
      },
    },
  },
});

app.use(pinia);
app.use(router);
app.mount("#app");
