<template>
  <td :colspan=column.colspan>
    ss {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
