<template lang="pug">
  #home
    ol-map
    search
    location-info
    journey
</template>

<script>

import OlMap from '@/components/Map.vue';
import Search from '@/components/Search.vue';
import LocationInfo from '@/components/Location-Info.vue';
import Journey from '@/components/Journey.vue';

export default {
  components: {
    OlMap,
    Search,
    LocationInfo,
    Journey,
  },
};
</script>
