<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CRating',
  props: {
    rating: {
      type: Number,
      required: true
    },
    numberOfRatings: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
