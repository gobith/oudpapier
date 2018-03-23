<template>
  <div>
    <b-modal v-model="showModal" v-on:ok="okPressed" v-on:cancel="cancelPressed">
      <div class="d-block text-center">
        <h3>{{name}}</h3>
        <p>{{date}}</p>
        <p>{{statusString}}</p>
        <br>
        <b-button-group>
          <b-button
            v-for="nextStatus in nextStatuses"
            @click="statusPressed(nextStatus)">
            {{nextStatus.string}}
          </b-button>
        </b-button-group>
      </div>


    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {name: '', date: null, statusString: null, nextStatuses: [], seconds: null, userId: null}
  },

  methods: {
    okPressed: (evt) => {},
    cancelPressed: (evt) => {},
    statusPressed: function(status) {

        this.$store.dispatch('postUserPartTime' , { seconds: this.seconds , status: status.symbol, userId: this.userId});

        this.$store.commit("showRoosterModal", false)}
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
    this.date = upt.dateString;
    this.statusString = upt.status.string;
    this.nextStatuses = upt.nextStatuses;
    this.seconds = upt.seconds;
    this.userId = upt.userId;

  }
}
</script>
