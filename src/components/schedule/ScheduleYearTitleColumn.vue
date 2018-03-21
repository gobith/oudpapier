<template>
  <td :colspan=column.colspan>
    yr-t {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
