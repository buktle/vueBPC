<template>
  <div>
    <TapHeaderComponent :HeaderName="HeaderName" :Taps="Taps" />
    <machinesLists />
  </div>
</template>

<script>
import TapHeaderComponent from '@/components/TapHeaderComponent'
import machinesLists from '@/components/machines/machinesLists'

export default {
  components: {
    TapHeaderComponent,
    machinesLists
  },
  data() {
    return {
      HeaderName: 'เครื่องจักร',
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