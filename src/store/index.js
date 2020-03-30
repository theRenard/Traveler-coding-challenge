import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapIsActive: false,
  },
  mutations: {
    ACTIVATE_MAP: (state) => {
      state.mapIsActive = true;
    },
    DEACTIVATE_MAP: (state) => {
      state.mapIsActive = false;
    },
  },
  actions: {
  },
});
