<template>
<b-row>
  <b-col cols="7" md="10">{{parttime.prettyLongString}}</b-col>
  <b-col >

  <b-form-group>
      <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="sm"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>

  </b-col>
</b-row>
</template>

<script>
export default {
data () {
    return {
      selected: 'radio1',
      options: [
        { text: 'Wel', value: 'radio1' },
        { text: 'Niet', value: 'radio2' }
      ]
    }
  },
  props: ['parttime'],
}
</script>
