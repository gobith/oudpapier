<template>
  <td
    :colspan=column.colspan
    align="center">
    {{column.title}}
  </td>
</template>

<script>
export default {
  props: ['column']
}
</script>
