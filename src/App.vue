<template>
  <c-form :data="data" />
</template>

<script>
import CForm from '@/components/form/form.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { CForm },
  setup () {
    const data = {
      price: '232 zł',
      rating: 4.2,
      numberOfRatings: 123
    }

    return {
      data
    }
  }
})
</script>

<style lang="scss">
@import "assets/global.scss";
</style>
