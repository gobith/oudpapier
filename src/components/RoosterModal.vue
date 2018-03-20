<template>
  <div>
    <b-modal v-model="showModal" v-on:ok="okPressed" v-on:cancel="cancelPressed">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {

  methods: {
    okPressed: (evt) => {alert('ok pressed')},
    cancelPressed: (evt) => {alert('cancel pressed')}
  },

  computed: {
            showModal: {
                get() {
                    return this.$store.state.showRoosterModal
                },
                set(val) {
                    this.$store.commit("showRoosterModal", val)
                }
            }
        },
  created () {
    console.log('created')
  }
}
</script>
