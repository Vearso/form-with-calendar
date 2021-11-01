<template>
  <div
    class="c-calendar-day"
    :class="[day.month !== CURRENT && 'c-calendar-day--inactive', day.date.getTime() === today.getTime() && 'c-calendar-day--today']"
  >
    {{ day.label }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { CURRENT }         from '@/components/calendar/hooks/use-calendar';
import { startOfToday }    from 'date-fns';

export default defineComponent({
  name: 'CCalendarDay',
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const today = startOfToday();
    return {
      today,
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

  &__point {
    border-radius: 50%;
    background-color: var(--primary-500);
  }
  &__point.c-calendar-day--today {
    color: var(--white);
  }

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
    &--middle.c-calendar-day--today,
    &--end.c-calendar-day--today,
    &--start.c-calendar-day--today {
      color: var(--white);
    }
  }

  &--active {
    &:hover {
      background-color: var(--primary-500);
    }
  }

  &--inactive {
    color: var(--gray-500);
  }

  &--today:not(.c-calendar-day__range--start, .c-calendar-day__range--end, .c-calendar-day__range--middle, .c-calendar-day__point) {
    border-radius: 50%;
    border: 1px solid var(--primary-500);
    color: var(--primary-500);
    &:hover {
      color: var(--white);
    }
  }
  &--today.c-calendar-day--inactive {
    border-color: var(--gray-900);
    color: var(--gray-900);
  }
}
</style>
