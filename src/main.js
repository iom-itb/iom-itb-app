import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';
import router from './router/index.js';
import store from './store/index.js';
import ApiService from "@/store/api.service";
import './css/style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';


library.add(far);

// Create the app instance
const app = createApp(App)
  .use(router)
  .use(store)
  .use(createMetaManager());

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

ApiService.init();


await router.isReady()
app.mount('#app')