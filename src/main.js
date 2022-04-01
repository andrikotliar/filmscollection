import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import store from './store';
import routes from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
