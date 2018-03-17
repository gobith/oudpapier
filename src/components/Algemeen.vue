<template>
  <div class="container">
    <p>Hallo {{userName}}</p>
    <p>Je bent de rest van het jaar nog ingepland op de volgende dagdelen:</p>
    <b-list-group>
      <b-list-group-item v-for="parttime in parttimes">
        <b>Zaterdag {{parttime.dayOfMonth}} {{parttime.monthName}} {{parttime.partTimeString}}</b>
        <ul>
          <li v-if="parttime.isScheduledDriver || parttime.isConfirmedDriver">auto met aanhanger</li>
          <li>verzamelen {{parttime.startTimeString}} uur op de parkeerplaats aan de Sportlaan</li>
          <li>{{parttime.routeString}}</li>
        </ul>
      </b-list-group-item>
    </b-list-group>
    <br>
    <p>Ga naar <b-link to="inschrijven">inschrijven</b-link> om je dagdelen in the plannen.</p>
    <p>Ga naar <b-link to="rooster">rooster</b-link> om het overzicht te zien van alle oud papier ophalers.</p>
  </div>
</template>
<script>
import axios from 'axios';
import {mapGetters} from 'vuex';
export default {
    data: () => {
        return {
            parttimes: []
        }
    },
    computed: mapGetters([
        'userName'
    ]),
    created: function() {
            axios
                .get('confirmedUserSchedule?token=' + this.$store.getters.token)
                .then((response) => {this.parttimes = response.data})
                .catch(error => console.log(error))
}
}

</script>
