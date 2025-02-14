import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/tailwind.css';
import {createPinia} from "pinia";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(createPinia());
app.use(router);
app.mount('#app');
