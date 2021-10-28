<template>
  <div
    class="c-calendar-day"
    :class="day.month !== CURRENT && 'c-calendar-day--not-current-month'"
  >
    {{ day.value }}
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
    }
  },
  setup() {
    return {
      CURRENT,
    }
  }
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
  &:hover {
    background-color: var(--primary-300);
  }

  &--not-current-month {
    color: var(--gray-500);
   }
}
</style>
