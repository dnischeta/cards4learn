import { Quasar } from 'quasar';
import { createApp } from 'vue';

import App from './App.vue';

import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});

app.mount('#app');
