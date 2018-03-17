<template>
<div class="container">
  <b-navbar toggleable="md" type="dark" variant="primary">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">ACW Oud Papier</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/algemeen" v-if="isLoggedin">Algemeen</b-nav-item>
        <b-nav-item to="/inschrijven" v-if="isLoggedin">Inschrijven</b-nav-item>
        <b-nav-item to="/rooster" v-if="isLoggedin">Rooster</b-nav-item>

        <b-nav-item-dropdown text="Admin" right v-if="isAdmin">
         <b-dropdown-item to="/admin/gebruikers">Gebruikers</b-dropdown-item>
         <b-dropdown-item to="/admin/dagdelen">Dag Delen</b-dropdown-item>
         <b-dropdown-item to="/admin/rooster">Rooster</b-dropdown-item>
         <b-dropdown-item to="/admin/log">Log</b-dropdown-item>
        </b-nav-item-dropdown>


      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="notLoggedin">
      <b-nav-item to="/inloggen">Inloggen</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="isLoggedin">
      <b-nav-item @click="logout">Uitloggen</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
computed: mapGetters([
      'isAdmin',
      'isLoggedin',
      'notLoggedin'
    ]),
    methods: {
    logout (event) {this.$store.dispatch('logout')}
    }
}
</script>
