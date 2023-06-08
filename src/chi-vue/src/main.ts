import { createApp } from 'vue';
import ChiVue from '@/store';
import App from './App.vue';
import Vuex from 'vuex';

const app = createApp(App);
const store = new Vuex.Store({
  state: {},
  modules: {
    ChiVue,
  },
});

app.use(store);
app.mount('#app');
