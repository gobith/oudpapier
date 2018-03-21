<template>
  <td :colspan=column.colspan>
    mth-t {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
