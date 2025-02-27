import './assets/main.css'
import "vue-fullpage.js/dist/style.css"
import * as VueFullPage from "vue-fullpage.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueFullPage)
app.use(router)

app.mount('#app')
