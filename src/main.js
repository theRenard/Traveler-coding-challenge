import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import { Button, Select, Autocomplete } from 'element-ui';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';


const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.everbase.co/graphql?apikey=alpha',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.component(Button.name, Button);
Vue.component(Autocomplete.name, Autocomplete);
Vue.component(Select.name, Select);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
