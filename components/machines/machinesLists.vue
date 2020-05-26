<template>
  <v-card>
    <v-card-title>
      {{titleTable}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table @click="fcTest" :headers="headers" :items="Products" :search="search" class="elevation-1"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      titleTable: 'รายการเครื่องจักร',
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'prodName'
        },
        { text: 'Calories', value: 'desc' },
        { text: 'Fat (g)', value: 'id' },
        { text: 'Carbs (g)', value: 'qty' }
      ],
    }
  },
  methods: {
    fcTest(){
      console.log('test')
    }
  },
  computed: {
    Products() {
      return this.$store.getters.getAllPosts
    }
  }
}
</script>