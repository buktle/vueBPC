<template>
  <div>
    <TapHeaderComponent :HeaderName="HeaderName" :Taps="Taps" />
    <ProductsLists />
  </div>
</template>

<script>
import TapHeaderComponent from '@/components/TapHeaderComponent'
import ProductsLists from '@/components/Products/ProductsLists'

export default {
  components: {
    TapHeaderComponent,
    ProductsLists
  },
  data() {
    return {
      HeaderName: 'แจ้งซ่อม',
      Taps: [
        'รายการ',
        'xxxxx',
        'bbbbb'
      ]
    }
  }
}
</script>

<style>
</style>