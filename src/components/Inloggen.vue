<template>
  <div class = "container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

    <b-form-group id="exampleInputGroup2"
                  label="Naam:"
                  label-for="exampleInput2">
      <b-form-input id="exampleInput2"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Vul in Naam en achternaam">
      </b-form-input>
    </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Password:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Vul in password">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.$store.dispatch('login' , this.form)
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
