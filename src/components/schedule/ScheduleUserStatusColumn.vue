<template>
  <td :colspan=column.colspan>
    u-ss {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
