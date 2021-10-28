<template>
  <div
    class="c-calendar-day"
    :class="day.month !== CURRENT && 'c-calendar-day--inactive'"
  >
    {{ day.label }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { CURRENT }         from '@/components/calendar/hooks/use-calendar';

export default defineComponent({
  name: 'CCalendarDay',
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      CURRENT,
    };
  },
});
</script>

<style scoped lang="scss">
.c-calendar-day {
  margin: .3rem 0;
  padding: 0 .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-18);
  cursor: pointer;

  &__range {
    &--start {
      border-radius: 50%;
      position: relative;
      background-color: var(--primary-500);

      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        border-radius: 50% 0 0 50%;
        background-color: var(--primary-300);
      }
    }
    &--end {
      border-radius: 50%;
      position: relative;
      background-color: var(--primary-500);

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        border-radius: 0 50% 50% 0;
        background-color: var(--primary-300);
      }
    }

    &--middle {
      background-color: var(--primary-300);
    }
  }

  &:hover {
    background-color: var(--primary-500);
  }

  &--inactive {
    color: var(--gray-500);
  }
}
</style>
