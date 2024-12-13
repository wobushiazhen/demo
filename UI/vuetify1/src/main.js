// Plugins
import { registerPlugins } from '@/plugins'

import '@/assets/base.css'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
