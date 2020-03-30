<template lang="pug">
  #journey
    el-drawer(
      @close="$store.commit('CLOSE_DRAWER')"
      :visible="this.$store.state.drawerIsActive"
      direction="rtl" )
      el-table( :data="$store.state.journey" style="width: 100%;" height="calc(100vh - 76px)")
        el-table-column( label="City" )
          template(slot-scope="scope")
            span( style="margin-right: 10px" ) {{ scope.row.name }}
        el-table-column( label="Country" )
          template(slot-scope="scope")
            span {{ scope.row.country.name }}
        el-table-column
          template(slot-scope="scope")
            el-button(
              icon="el-icon-delete-solid"
              size="mini"
              type="danger" @click="handleDelete(scope.$index, scope.row)")
            el-button(
              icon="el-icon-location-outline"
              size="mini"
              type="success" @click="goToSelectedLocation(scope.row)")

</template>

<script>
import { map, view } from '@/map';
import { fromLonLat } from 'ol/proj';
import flyTo from '@/map/fly-to';

export default {
  name: 'Journey',
  methods: {
    handleDelete(index) {
      this.$store.commit('REMOVE_LOCATION_FROM_JOURNEY', index);
    },
    goToSelectedLocation(city) {
      const location = fromLonLat([city.location.long, city.location.lat]);
      flyTo({ location, view });
      this.$store.commit('SET_SELECTED_LOCATION', city);
      this.$store.commit('CLOSE_DRAWER');
      const overlay = map.getOverlayById('city-overlay');
      overlay.setPosition(location);
    },
  },
};
</script>

<style lang="scss">
#journey {
  position: absolute;

  .el-button {
    margin-left: 10px;
  }
  .el-table {
    padding: 0 10px;
  }
}
</style>
