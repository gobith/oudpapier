<template>
  <td :colspan=column.colspan>
    {{column.title}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
