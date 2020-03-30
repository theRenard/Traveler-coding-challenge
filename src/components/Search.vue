<template lang="pug">
  #search
    el-input(
      @focus="focus"
      @blur="blur"
      v-model="query"
      size='large'
      placeholder="Where do yo want to go?" )
    el-button(
      :type="buttonType" ) go!
</template>

<script>

import { stopCarousel } from '@/map/map-carousel';

export default {
  name: 'Search',
  data: () => ({
    query: '',
  }),
  computed: {
    queryIsValid() {
      return this.query.length > 2;
    },
    buttonType() {
      return this.queryIsValid ? 'success' : '';
    },
  },
  methods: {
    focus() {
      this.$store.commit('ACTIVATE_MAP');
      stopCarousel();
    },
    blur() {
    },
  },
};
</script>

<style lang="scss">
#search {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 400px;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  .el-button {
    margin-left: 10px;
  }
}
</style>
