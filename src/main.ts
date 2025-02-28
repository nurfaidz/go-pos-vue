import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css';

const app = createApp(App)

app.use(Quasar)
app.use(createPinia())
app.use(router)

app.mount('#app')
