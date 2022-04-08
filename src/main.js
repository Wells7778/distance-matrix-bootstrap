import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(VueClipboard).mount('#app')
