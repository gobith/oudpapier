<template>
  <scheduledaycolumn v-if="column.type === 'day'"   :column=column></scheduledaycolumn>
  <scheduledaytitlecolumn v-else="column.type === 'day-t'"   :column=column></scheduledaytitlecolumn>
  <schedulemonthcolumn v-else="column.type === 'mth'"   :column=column></schedulemonthcolumn>
  <schedulemonthtitleColumn v-else="column.type === 'mth-t'"   :column=column></schedulemonthtitleColumn>
  <scheduleparttimeColumn v-else="column.type === 'pt'"   :column=column></scheduleparttimeColumn>
  <scheduleparttimetitlecolumn v-else="column.type === 'pt-t'"   :column=column></scheduleparttimetitlecolumn>
  <schedulestatuscolumn v-else="column.type === 'ss'"   :column=column></schedulestatuscolumn>
  <scheduleuserparttimecolumn v-else="column.type === 'u-pt'"   :column=column></scheduleuserparttimecolumn>
  <scheduleusercolumn v-else="column.type === 'user'"   :column=column></scheduleusercolumn>
  <scheduleyearcolumn v-else="column.type === 'yr'"   :column=column></scheduleyearcolumn>
  <scheduleyeartitlecolumn v-else="column.type === 'yr-t'"   :column=column></scheduleyeartitlecolumn>
  <scheduleuserstatuscolumn v-else="column.type === 'u-ss'"   :column=column></scheduleuserstatuscolumn>

</template>


<script>
  import ScheduleDayColumn from './schedule/ScheduleDayColumn.vue';
  import ScheduleDayTitleColumn from './schedule/ScheduleDayTitleColumn.vue';
  import ScheduleMonthColumn from './schedule/ScheduleMonthColumn.vue';
  import ScheduleMonthTitleColumn from './schedule/ScheduleMonthTitleColumn.vue';
  import SchedulePartTimeColumn from './schedule/SchedulePartTimeColumn.vue';
  import SchedulePartTimeTitleColumn from './schedule/SchedulePartTimeTitleColumn.vue';
  import ScheduleStatusColumn from './schedule/ScheduleStatusColumn.vue';
  import ScheduleUserColumn from './schedule/ScheduleUserColumn.vue';
  import ScheduleUserPartTimeColumn from './schedule/ScheduleUserPartTimeColumn.vue';
  import ScheduleYearColumn from './schedule/ScheduleYearColumn.vue';
  import ScheduleYearTitleColumn from './schedule/ScheduleYearTitleColumn.vue';
  import ScheduleUserStatusColumn from './schedule/ScheduleUserStatusColumn.vue';
  export default {
    props: ['column'],
    components: {
      'scheduledaycolumn': ScheduleDayColumn ,
      'scheduledaytitlecolumn':  ScheduleDayTitleColumn ,
      'schedulemonthcolumn':  ScheduleMonthColumn ,
      'schedulemonthtitleColumn':  ScheduleMonthTitleColumn ,
      'scheduleparttimeColumn':  SchedulePartTimeColumn,
      'scheduleparttimetitlecolumn':  SchedulePartTimeTitleColumn ,
      'schedulestatuscolumn':  ScheduleStatusColumn ,
      'scheduleusercolumn':  ScheduleUserColumn ,
      'scheduleuserparttimecolumn':  ScheduleUserPartTimeColumn ,
      'scheduleyearcolumn':  ScheduleYearColumn ,
      'scheduleyeartitlecolumn':  ScheduleYearTitleColumn,
      'scheduleuserstatuscolumn':  ScheduleUserStatusColumn
    }}
</script>
