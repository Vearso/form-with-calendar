<template>
  <c-form :data="data"/>
</template>

<script>
import CForm from '@/components/form/form.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { CForm },
  setup () {
    const data = {
      price: 232,
      rating: 4.3,
      numberOfRatings: 123
    }

    return {
      data
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
