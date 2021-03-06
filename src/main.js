import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { routes } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store';
import {MediaQueries} from 'vue-media-queries';

const mediaQueries = new MediaQueries();

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(mediaQueries);


export const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  mediaQueries: mediaQueries,
  render: h => h(App)
})
