<template>
  <div class="c-calendar-month">
    <span
      v-for="name in shortWeekNames"
      :key="name"
      class="c-calendar-month__label"
    >{{ name }}</span>
    <c-calendar-day
      v-for="(day,index) in month"
      :key="index"
      :day="day"
      @click="selectDay(day)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CCalendarDay        from '@/components/calendar/components/calendar-day/calendar-day.vue';
import { shortWeekNames }  from '@/components/calendar/hooks/use-calendar';

export default defineComponent({
  name: 'CCalendarMonth',
  components: { CCalendarDay },
  props: {
    month: {
      type: Array,
      required: true,
    },
  },
  emits: [ 'select-day' ],
  setup() {
    const selectDay = (day) => {
      console.log(day);
    };

    return {
      shortWeekNames,
      selectDay,
    };
  },
});
</script>

<style scoped lang="scss">
.c-calendar-month {
  display: grid;
  grid-template-columns: repeat(7, 5rem);
  grid-template-rows: repeat(7, 5rem);

  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-900);
    font-size: var(--font-size-14);
  }
}
</style>
