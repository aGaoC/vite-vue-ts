import { createApp } from 'vue'
// eslint-disable-next-line no-unused-vars
import ElementPlus from 'element-plus'
import App from './App.vue'

import router from './router/index'
// import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).mount('#app')
