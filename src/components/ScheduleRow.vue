<template>
<tr>
  <schedule-column v-for="column in row.columns" :column=column></schedule-column>
</tr>
</template>


<script>
import ScheduleColumn from './ScheduleColumn.vue';
export default {
  props: ['row'],
  components: {'schedule-column': ScheduleColumn}

}
</script>
