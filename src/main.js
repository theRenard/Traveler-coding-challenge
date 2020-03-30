import Vue from 'vue';
import { Button, Select, Input } from 'element-ui';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
