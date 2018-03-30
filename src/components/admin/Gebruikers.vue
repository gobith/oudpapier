<template>
  <div class="container">
    <b-row>
      <b-col cols="3">
        <b-list-group>
          <b-list-group-item button v-for="user in users" @click="userPressed(user)">{{user.name}}</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <user-part :user=user></user-part>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import UserPart from './Gebruiker.vue';
  export default {

    data () {
      return {user: null}
    },

    components: {'user-part': UserPart},
    computed: {
    users: function () { return this.$store.getters.users}
    },
    methods: {
      userPressed: function (user) {console.log(user); this.user = user}

    },
    created: function () {
      console.log('created Gebruikers.vue');
      this.$store.dispatch('getUsers')
    }
  }
</script>
