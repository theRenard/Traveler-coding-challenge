<template lang="pug">
  #map( ref="map" )
</template>

<script>

import map from '@/map';

export default {
  name: 'Map',
  mounted() {
    const initilizedMap = map({ target: 'map' });
    console.log(initilizedMap);
  },

};
</script>

<style lang="scss">
#map {
  width: 100vw;
  height: 100vh;
}
</style>
