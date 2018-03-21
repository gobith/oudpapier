<template>
  <td :colspan=column.colspan>
    pt-t {{column.type}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
