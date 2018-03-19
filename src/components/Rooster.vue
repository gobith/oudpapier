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
  data () {
  return {rows: []}
  },
  components: {'schedule-row': ScheduleRow , 'rooster-modal': RoosterModal},
  created: function () {
    axios.get('schedule').then((response) => {
      this.rows = response.data;
      console.log(this.rows[0].columns[0].title);
      console.log(this.rows)
      })
  }
}
</script>

<style>
table {
	margin-top:35px !important;
	font-size: 14px;
	border-collapse: collapse;

  width: 100%;
	}


td {
	width: 22px;
	height: 24px;
	border: 1px solid #C1C3D1;
  width:1px;
  white-space:nowrap;
}
</style>
