

import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from "bootstrap";

import { router } from "./router";

const app = createApp(App)

app.use(router)

app.mount('#app')
