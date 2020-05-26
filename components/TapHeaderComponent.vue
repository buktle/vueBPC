<template>
  <div>
    <h2>{{HeaderName}}</h2>
    <v-tabs>
      <v-tab>{{Taps[0]}}</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  props: {
    HeaderName: {
      type: String,
      default: 'Header..'
    },
    Taps: {
      type: Array
    }
  }
}
</script>