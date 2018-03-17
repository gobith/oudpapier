<template>
  <div class="container">
  <b-list-group>
    <b-list-group-item v-for="parttime in parttimes">
      <inschrijf-item :parttime=parttime></inschrijf-item>
    </b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
import axios from 'axios';
import Inschrijfitem from './Inschrijfitem.vue';
import { mapGetters } from 'vuex';
export default {
  data: () => {
    return {
        parttimes: []
    }
},
  components: {'inschrijf-item': Inschrijfitem},
  computed: mapGetters([
      'token',
      'userId',
      'expiration',
      'role'
    ]),
  created: function() {
            axios
                .get('userregistration?token=' + this.$store.getters.token)
                .then((response) => {console.log(response.data); this.parttimes = response.data})
                .catch(error => console.log(error))
}
}
</script>
