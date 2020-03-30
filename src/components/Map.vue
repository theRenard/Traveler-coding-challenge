<template lang="pug">
  #map( :class="{ active: $store.state.mapIsActive }")
</template>

<script>

import { map } from '@/map';
import { startCarousel, stopCarousel } from '@/map/map-carousel';

export default {
  name: 'Map',
  mounted() {
    map.setTarget(this.$el);
    startCarousel();
  },
  destroyed() {
    stopCarousel();
  },
};
</script>

<style lang="scss">
#map {
  width: 100vw;
  height: 100vh;
  filter: grayscale(1);
  &.active {
    filter: grayscale(0);
  }
}
</style>
