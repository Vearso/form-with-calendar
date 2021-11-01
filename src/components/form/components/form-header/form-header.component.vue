<template>
  <div class="c-form-header">
    <p class="c-form-header__price">
      {{ price }}
    </p>
    <c-rating
      :rating="rating"
      :number-of-ratings="numberOfRatings"
    />
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
      type: String,
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

<style scoped lang="scss">
.c-form-header {
  padding: 1.3rem 0;
  border-bottom: 1px solid black;
  &__price {
    font-size: var(--font-size-30);
    font-weight: bold;
    margin: .8rem 0;
  }
}
</style>
