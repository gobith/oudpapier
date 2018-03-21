<template>
  <td :colspan=column.colspan>
    day-t {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
