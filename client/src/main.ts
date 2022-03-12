import { Quasar } from 'quasar';
import { createApp } from 'vue';

import router from '@/router';

import App from './App.vue';

import 'quasar/dist/quasar.css';
import '@/assets/styles/app.css';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: '#1976d2',
      secondary: '#26a69a',
      accent: '#9c27b0',
      positive: '#21ba45',
      negative: '#c10015',
      info: '#31ccec',
      warning: '#f2c037',
      dark: '#1d1d1d',
      darkPage: '#121212',
    },
  },
});

app.use(router);

app.mount('#app');
