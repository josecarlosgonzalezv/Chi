import { configureCompat } from '@vue/compat';
import { createApp } from 'vue';
import ChiVue from '@/store';
import App from './App.vue';
import Vuex from 'vuex';
import mitt from 'mitt';

configureCompat({
  MODE: 3,
});

const emitter = mitt();
const app = createApp(App);
const store = new Vuex.Store({
  state: {},
  modules: {
    ChiVue,
  },
});

app
  .use(store)
  .provide('emitter', emitter)
  .mount('#app');
