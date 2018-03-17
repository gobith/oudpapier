<template>
  <td
    :colspan=column.colspan
    v-bind:style="{ backgroundColor: '#' + column.bgColor}"
    align="center"
    @click ="columnClicked">{{column.title}}
  </td>
</template>


<script>
  export default {
    props: ['column'],
    methods: {
    columnClicked: function() {
    console.log(this.column);
    this.column.bgColor = "0707FF";
    }
    }
    }
</script>
