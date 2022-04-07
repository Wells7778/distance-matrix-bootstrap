import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

createApp(App).use(router).use(VueClipboard).mount('#app')
