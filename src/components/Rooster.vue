<template>
  <div class="container">
    <rooster-modal></rooster-modal>
    <table>
      <schedule-row v-for="row in rows" :row=row></schedule-row>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import ScheduleRow from './ScheduleRow.vue';
import RoosterModal from './RoosterModal.vue';
export default {

  components: {'schedule-row': ScheduleRow , 'rooster-modal': RoosterModal},
  computed: {
  rows: function () { return this.$store.getters.schedule}
  },
  created: function () {
    this.$store.dispatch('getSchedule')
  }
}
</script>

<style>
table {
	border-collapse: collapse;
	font-size: 14px;
  width: 100%
	}

  td {
  	border: 1px solid black;
  }
</style>
