import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import {
  Button,
  Select,
  Autocomplete,
  Link,
  Drawer,
  Table,
  TableColumn,
} from 'element-ui';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';


const apolloClient = new ApolloClient({
  uri: 'https://api.everbase.co/graphql?apikey=alpha',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.component(Button.name, Button);
Vue.component(Link.name, Link);
Vue.component(Drawer.name, Drawer);
Vue.component(Autocomplete.name, Autocomplete);
Vue.component(Select.name, Select);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
