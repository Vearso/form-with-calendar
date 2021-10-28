<template>
  <div class="c-calendar-header">
    <c-icon-arrow-previous
      class="c-calendar-header__icon c-calendar-header__icon--previous"
      @click="$emit('prev-month')"
    />
    <span class="c-calendar-header__month">{{ monthName }}</span>
    <c-icon-arrow-previous
      class="c-calendar-header__icon c-calendar-header__icon--next"
      @click="$emit('next-month')"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CIconArrowPrevious  from '@/components/icons/icon-arrow-previous.component.vue';

export default defineComponent({
  name: 'CCalendarHeader',
  components: { CIconArrowPrevious },
  props: {
    monthName: {
      type: String,
      required: true,
    },
  },
  emits: [ 'prev-month', 'next-month' ],
});
</script>

<style scoped lang="scss">
.c-calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.1rem;
  background-color: var(--primary-500);

  &__month {
    color: var(--white);
    font-weight: bold;
    font-size: var(--font-size-22);
  }

  &__icon {
    width: 3rem;
    height: 2rem;
    cursor: pointer;

    &--next {
      transform: rotate(180deg);
    }
  }
}
</style>
