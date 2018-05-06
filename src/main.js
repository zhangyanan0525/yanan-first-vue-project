import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
// import store from './store';
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'


Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
  // template: '<App/>',
  // components: { App },
}).$mount('#app')
