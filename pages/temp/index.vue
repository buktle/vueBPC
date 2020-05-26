<template>
  <div>
    <TapHeaderComponent :HeaderName="HeaderName" :Taps="Taps" />
    {{Products}}
    <!-- <ProductsLists /> -->
  </div>
</template>

<script>
import TapHeaderComponent from '@/components/TapHeaderComponent'
// import ProductsLists from '@/components/Products/ProductsLists'

export default {
  components: {
    TapHeaderComponent,
    // ProductsLists
  },
  data() {
    return {
      HeaderName: 'ทดสอบ',
      Taps: [
        'รายการ',
        'xxxxx',
        'bbbbb'
      ]
    }
  },
  computed: {
    Products(){
      return this.$store.getters.getAllPosts
    }
  },
}
</script>

<style>
</style>