import { createApp } from 'vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css'
import App from './App.vue'
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router).use(store).use(Toast).mount('#app')
