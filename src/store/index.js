import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapIsActive: false,
    searchIsActive: true,
    drawerIsActive: false,
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
    OPEN_DRAWER: (state) => {
      state.drawerIsActive = true;
    },
    CLOSE_DRAWER: (state) => {
      state.drawerIsActive = false;
    },
    HIDE_SEARCH: (state) => {
      state.searchIsActive = false;
    },
    SHOW_SEARCH: (state) => {
      state.searchIsActive = true;
    },
    SET_SELECTED_LOCATION: (state, payload) => {
      state.selectedLocation = payload;
    },
    RESET_SELECTED_LOCATION: (state) => {
      state.selectedLocation = {};
    },
    ADD_SELECTED_LOCATION_TO_JOURNEY: (state) => {
      state.journey.push(state.selectedLocation);
    },
    REMOVE_LOCATION_FROM_JOURNEY: (state, payload) => {
      state.journey.splice(payload, 1);
    },
  },
});
