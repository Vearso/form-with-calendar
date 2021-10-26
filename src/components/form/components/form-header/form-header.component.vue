<template>
  <div class="c-form-header">
    <h3 class="c-form-header__price">{{`${price} zł`}}</h3>
    <c-rating :rating="rating" :number-of-ratings="numberOfRatings"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CRating from '@/components/rating/rating.component.vue'

export default defineComponent({
  name: 'CFormHeader',
  components: { CRating },
  props: {
    price: {
      type: Number,
      required: true
    },
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
