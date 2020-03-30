<template lang="pug">
  transition(name="fade")
    #search( v-show="$store.state.searchIsActive" :class="{ 'is-active': isActive }" )
      el-autocomplete(
        @focus="focus"
        clearable
        prefix-icon="el-icon-search"
        :fetch-suggestions="querySearchAsync"
        @select="handleSelect"
        v-model="query"
        :trigger-on-focus="false"
        size="large"
        :placeholder="placeHolder" )
        template( slot-scope="{ item }" )
          div {{ item.name }} | {{ item.country.name }}
</template>

<script>

import { MIN_QUERY_LENGTH } from '@/config.json';
import citiesQuery from '@/gql-queries/cities';
import countriesQuery from '@/gql-queries/countries';
import { map, view } from '@/map';
import { stopCarousel } from '@/map/map-carousel';
import flyTo from '@/map/fly-to';
import { fromLonLat } from 'ol/proj';

export default {
  name: 'Search',
  data: () => ({
    query: '',
    isActive: false,
    cities: [],
    countries: [],
  }),
  computed: {
    queryIsValid() {
      return this.query.length > 2;
    },
    buttonType() {
      return this.queryIsValid ? 'success' : '';
    },
    placeHolder() {
      return this.$store.state.mapIsActive
        ? 'Ex: Rome, United Kingdom, Berlin...'
        : 'Where do yo want to go?';
    },
  },
  methods: {
    querySearchAsync(queryString, cb) {
      const isValidQuery = queryString.length > MIN_QUERY_LENGTH;
      const cityPromise = new Promise((resolve) => {
        this.$apollo.addSmartQuery('cities', {
          query: citiesQuery,
          variables() {
            return {
              query: this.query,
            };
          },
          skip() {
            return !isValidQuery;
          },
          result({ data }) {
            let results = [];
            if (data.cities) {
              results = data.cities.map((result) => ({
                ...result,
                value: result.name,
              }));
            }
            resolve(results);
          },
        });
      });
      const countryPromise = new Promise((resolve) => {
        this.$apollo.addSmartQuery('countries', {
          query: countriesQuery,
          variables() {
            return {
              query: this.query,
            };
          },
          skip() {
            return !isValidQuery;
          },
          result({ data }) {
            let results = [];
            if (data.countries && data.countries[0]) {
              results = data.countries[0].cities.map((result) => ({
                ...result,
                value: result.name,
              }));
            }
            resolve(results);
          },
        });
      });
      Promise.all([cityPromise, countryPromise]).then((values) => {
        const [citiesFromCityQuery, citiesFromCountryQuery] = values;
        cb([...citiesFromCityQuery, ...citiesFromCountryQuery]);
      });
    },
    handleSelect(city) {
      const location = fromLonLat([city.location.long, city.location.lat]);
      flyTo({ location, view });
      // this.$store.commit('HIDE_SEARCH');
      this.$store.commit('SET_SELECTED_LOCATION', city);
      const overlay = map.getOverlayById('city-overlay');
      overlay.setPosition(location);
    },
    focus() {
      this.$store.commit('ACTIVATE_MAP');
      stopCarousel();
      this.isActive = true;
    },
  },
};
</script>

<style lang="scss">
#search {
  position: absolute;
  top: 40%;
  left: 50%;
  min-width: 40vw;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  transition: all .3s;
  .el-button {
    margin-left: 10px;
  }
  &.is-active {
    top: 20px;
    left: 20px;
    transform: translateX(0) translateY(0);
  }
  .el-input {
    width: 40vw;
  }
}
</style>
