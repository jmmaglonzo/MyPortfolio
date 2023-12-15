import "./assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
const app = createApp(App);
app.component("Basebutton", BaseButton);

app.mount("#app");
