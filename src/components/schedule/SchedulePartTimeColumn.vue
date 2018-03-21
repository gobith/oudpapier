<template>
  <td :colspan=column.colspan>
    pt {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
