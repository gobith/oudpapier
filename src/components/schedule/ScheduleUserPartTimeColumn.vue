<template>
  <td
    :colspan=column.colspan
    v-bind:style="{ backgroundColor: '#' + column.bgColor}"
    align="center"
    @click ="columnClicked">
    {{column.title}}
  </td>
</template>

<script>
export default {
  props: ['column'],
  methods: {
    columnClicked: function() {
      this.$store.commit('showRoosterModal' , true)
      }
  }
}
</script>

<style scoped>
td {
	width: 22px;
}
</style>
