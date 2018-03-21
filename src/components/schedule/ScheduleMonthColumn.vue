<template>
  <td :colspan=column.colspan>
    mth {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
