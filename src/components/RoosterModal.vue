<template>
  <div>
    <b-modal v-model="showModal" v-on:ok="okPressed" v-on:cancel="cancelPressed">
      <div class="d-block text-center">
        <h3>{{name}}</h3>
        <p>{{date}}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {name: '', date: null}
  },

  methods: {
    okPressed: (evt) => {},
    cancelPressed: (evt) => {}
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
  beforeUpdate () {
    var upt = this.$store.state.userPartTime;
    this.name = upt.userName;
    this.date = upt.dateString
  }
}
</script>
