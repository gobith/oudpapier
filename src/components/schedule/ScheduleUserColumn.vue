<template>
  <td :colspan=column.colspan>
    user {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
