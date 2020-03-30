import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapIsActive: false,
    searchIsActive: true,
    selectedLocation: {},
    journey: [],
  },
  mutations: {
    ACTIVATE_MAP: (state) => {
      state.mapIsActive = true;
    },
    DEACTIVATE_MAP: (state) => {
      state.mapIsActive = false;
    },
    HIDE_SEARCH: (state) => {
      state.searchIsActive = false;
    },
    SHOW_SEARCH: (state) => {
      state.searchIsActive = true;
    },
    SET_SELECTED_LOCATION: (state, payload) => {
      console.log(payload);
      state.selectedLocation = payload;
    },
    RESET_SELECTED_LOCATION: (state) => {
      state.selectedLocation = {};
    },
  },
  actions: {
  },
});
