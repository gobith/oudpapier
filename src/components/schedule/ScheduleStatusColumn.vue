<template>
  <td
    :colspan=column.colspan
    v-bind:style="{ backgroundColor: '#' + column.bgColor}"
    align="center">
    {{column.title}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
