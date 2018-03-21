<template>
  <td :colspan=column.colspan>
    u-pt {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
