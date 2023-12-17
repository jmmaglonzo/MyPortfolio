import "./assets/base.css";

import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSubheading from "@/components/Base/BaseSubheading.vue";
const app = createApp(App);
app.component("base-button", BaseButton);
app.component("sub-heading", BaseSubheading);
app.component("Icon", Icon);
app.mount("#app");
