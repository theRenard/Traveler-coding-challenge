<template lang="pug">
  #home
    ol-map
    search
    journey
    overlay
</template>

<script>

import OlMap from '@/components/Map.vue';
import Overlay from '@/components/Overlay.vue';
import Search from '@/components/Search.vue';
import Journey from '@/components/Journey.vue';

export default {
  components: {
    Overlay,
    OlMap,
    Search,
    Journey,
  },
};
</script>
