<template>
  <td :colspan=column.colspan>
    {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
