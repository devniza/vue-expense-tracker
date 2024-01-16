import "./assets/style.css";

import { createApp } from "vue"; 
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from "pinia";
import App from "./App.vue";

// Create Pinia instance
const pinia = createPinia();



// Create App instance
const app = createApp(App)

// Use
app.use(pinia);
app.use(Toast);
app.mount("#app")
