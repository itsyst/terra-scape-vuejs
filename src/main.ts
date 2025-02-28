import { createApp } from 'vue'
import './sass/main.scss';
import App from './App.vue'
import router from './routers';
 
// Create app instance
const app = createApp(App);
app.use(router);
app.mount('#app');