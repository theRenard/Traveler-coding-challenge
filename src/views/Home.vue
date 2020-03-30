<template lang="pug">
  #home
    ol-map
    search
    location-info
    journey
    overlay
</template>

<script>

import OlMap from '@/components/Map.vue';
import Overlay from '@/components/Overlay.vue';
import Search from '@/components/Search.vue';
import LocationInfo from '@/components/Location-Info.vue';
import Journey from '@/components/Journey.vue';

export default {
  components: {
    Overlay,
    OlMap,
    Search,
    LocationInfo,
    Journey,
  },
};
</script>
