import Vue from 'vue';
import App from './App.vue';
import router from '@/route/router';
import store from './store/store';
import elementUi from 'element-ui';
import './mock.js/mock'
import 'element-ui/lib/theme-chalk/index.css';
import './peimission';
import '@/styles/iconfont.less'
import '@/styles/main.scss'

Vue.config.productionTip = false;
Vue.use(elementUi);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
