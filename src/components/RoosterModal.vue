<template>
  <div>
    <b-modal ref="myModalRef" hide-footer v-model="showModal">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal () {

      this.$refs.myModalRef.hide();
      this.$store.commit('showRoosterModal', false)
    }

  },
  computed: {
    showModal () {
      return this.$store.getters.showRoosterModal
    }
  },
  created () {
    console.log('created')
  }
}
</script>
