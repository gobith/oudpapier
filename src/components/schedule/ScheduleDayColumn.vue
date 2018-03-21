<template>
  <td :colspan=column.colspan>
    day {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
