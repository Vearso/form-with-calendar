<template>
  <div class="c-rating">
    <div class="c-rating__stars">
      <component
        :is="index - .5 === getFixedRating(rating) ? 'c-icon-half-star' : 'c-icon-star'"
        v-for="index of numberOfStars"
        :key="index"
        class="c-rating__star"
        :class="[index - .5 <= getFixedRating(rating) && 'c-rating__star--filled' ]"
      />
    </div>
    <span class="c-rating__number">{{ numberOfRatings }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CIconStar           from '@/components/icons/icon-star.component.vue';
import CIconHalfStar       from '@/components/icons/icon-half-star.component.vue';

export default defineComponent({
  name: 'CRating',
  components: {
    CIconHalfStar,
    CIconStar,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
    numberOfRatings: {
      type: Number,
      required: true,
    },
    numberOfStars: {
      type: Number,
      default: 5
    }
  },
  setup() {
    const getFixedRating = (rating) => {
      return (Math.round(rating * 2) / 2).toFixed(1);
    };
    return {
      getFixedRating,
    };
  },
});
</script>

<style scoped lang="scss">
.c-rating {
  display: flex;
  align-items: center;

  &__number {
    font-weight: bold;
  }

  &__star {
    margin-right: .3rem;

    &--filled {
      color: var(--primary-500);
    }
  }
}
</style>
