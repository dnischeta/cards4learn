import { createApp } from 'vue';
import { Quasar } from "quasar";
import App from './App.vue';

import 'quasar/dist/quasar.css'

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // for future plugins
})

app.mount('#app');
