<template>
  <td
    :colspan=column.colspan
    align="center">
    yr {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
