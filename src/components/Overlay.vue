<template lang="pug">
  #overlay.el-popover.el-popper( x-placement="right" )
    el-link(
      :underline="false"
      icon="el-icon-close"
      @click="closeOverlay")
    template( v-if="$store.state.selectedLocation.name" )
      div( x-arrow="" class="popper__arrow" style="top: 5px;" )
      H1 {{ city.name }}
      H5 {{ country.name }} - {{ country.continent.name }}
      .space
      H6 Currencies:
        span( v-for="currency in country.currencies")  {{ currency.name }}
      H6 Population: {{ city.population }}
      H6 Languages:
        span( v-for="language in country.languages")  {{ language.name }}
      .space
      el-button(
        size="mini"
        type="primary"
        icon="el-icon-circle-plus-outline" @click="addLocationToJourney" ) Add to your Journey!
</template>

<script>

import { map } from '@/map';
import Overlay from 'ol/Overlay';

const overlay = new Overlay({
  id: 'city-overlay',
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});

export default {
  name: 'Overlay',
  computed: {
    city() {
      return this.$store.state.selectedLocation;
    },
    country() {
      return this.$store.state.selectedLocation.country;
    },
  },
  mounted() {
    overlay.setElement(this.$el);
    map.addOverlay(overlay);
  },
  methods: {
    addLocationToJourney() {
      this.$store.commit('ADD_SELECTED_LOCATION_TO_JOURNEY');
      this.$store.commit('OPEN_DRAWER');
    },
    closeOverlay() {
      overlay.setPosition(null);
      this.$store.commit('RESET_SELECTED_LOCATION');
    },
  },
};
</script>

<style lang="scss">
#overlay {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: -12px;
  transform-origin: center top;
  z-index: 2019;
  h1, h2, h3, h4, h5, h6 {
    margin: 2px 0;
  }
  .space {
    height: 5px;
  }
  .el-button {
    place-self: flex-end;
  }
  .el-link {
    position: absolute;
    right: 10px;
  }
}
</style>
