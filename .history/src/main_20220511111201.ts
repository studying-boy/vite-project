import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'; //引入vue-router
import './index.css'

const app = createApp(App);
app.use(router);
app.mount('#app')
