import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import MyPreset from "./mypreset/index.js";

import PrimeVue from "primevue/config";
import PrimeOne from "primevue/themes/primeone";

import IconField from "primevue/IconField";
import InputIcon from "primevue/InputIcon";
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
import MultiSelect from "primevue/multiselect";
import InputNumber from "primevue/inputnumber";
import ScrollPanel from "primevue/scrollpanel";

const pinia = createPinia();
const app = createApp(App);

app.component("ScrollPanel", ScrollPanel);
app.component("InputNumber", InputNumber);
app.component("InputIcon", InputIcon);
app.component("IconField", IconField);
app.component("Row", Row);
app.component("Card", Card);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Column", Column);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("Checkbox ", Checkbox);
app.component("InputText", InputText);
app.component("MultiSelect", MultiSelect);
app.component("DataTable", DataTable);
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
