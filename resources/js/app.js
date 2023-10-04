import './bootstrap';
import { createApp } from 'vue';

import App from './App.vue';
import router from './routes'
// start bootstrap 5.3 resources
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// end bootstrap 5.3 resources

const app = createApp(App)
app.use(router);
app.mount('#app')
