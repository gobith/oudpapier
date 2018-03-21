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
	border-collapse: collapse;
	font-size: 14px;
  width: 100%
	}

  td {
  	border: 1px solid black;
  }
</style>
