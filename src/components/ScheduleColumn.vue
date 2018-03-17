<template>
<div>
  <td
    :colspan=column.colspan
    v-bind:style="{ backgroundColor: '#' + column.bgColor}"
    align="center"
    @click ="columnClicked">{{column.title}}
  </td>
  <b-modal id="modal-center" centered title="Bootstrap-Vue">
   <p class="my-4">Vertically centered modal!</p>
 </b-modal>
  </div>
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
