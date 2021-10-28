<template>
  <div class="c-calendar-month">
    <div
      v-for="name in shortWeekNames"
      :key="name"
      class="c-calendar-month__label"
    >
      {{ name }}
    </div>
    <c-calendar-day
      v-for="(day,index) in month"
      :key="index"
      :day="day"
      :class="getSelectionClasses(day.date)"
      @click="handleSelection(day)"
      @mouseenter="updateSelection(day)"
      @mouseleave="deleteSelection(day)"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  watch,
}                   from 'vue';
import CCalendarDay from '@/components/calendar/components/calendar-day/calendar-day.vue';
import { shortWeekNames } from '@/components/calendar/hooks/use-calendar';
import {
  isBefore,
  isAfter,
}                         from 'date-fns';

export default defineComponent({
  name: 'CCalendarMonth',
  components: { CCalendarDay },
  props: {
    month: {
      type: Array,
      required: true,
    },
  },
  emits: [ 'select-day', 'selection-end' ],
  setup(props, context) {
    const selection = reactive({
      start: null,
      end: null,
      onGoing: false,
      restart: false,
    });

    const handleSelection = (day) => {
      if(selection.restart){
        selection.start = null;
        selection.end = null;
        selection.restart = false;
      }
      selection.onGoing = true;
      if (!selection.start) {
        selection.start = day.date;
      } else {
        isBefore(day.date, selection.end) ? selection.start = day.date : selection.end = day.date
        selection.onGoing = false;
        selection.restart = true;
        context.emit('selection-end', selection);
      }
    };
    watch(selection, () => {
      console.log(selection);
    })
    const updateSelection = (day) => {
      if (selection.onGoing) {
        if (!selection.end && isBefore(day.date, selection.start)) {
          selection.end = selection.start
          selection.start = day.date;
        } else if(selection.end && isAfter(day.date, selection.end)){
          selection.start = selection.end;
          selection.end = day.date;
        } else if (selection.end && isBefore(day.date, selection.end)){
          selection.start = day.date;
        } else if (selection.start && isAfter(day.date, selection.start)){
          selection.end = day.date;
        }
      }
    };

    const deleteSelection = (day) => {
      if (selection.onGoing) {
        if (isBefore(day.date, selection.end)){
          selection.start = null;
        } else {
          selection.end = null
        }
      }
    };

    const getSelectionClasses = (date) => {
      if (selection.start === date && selection.end === date) {
        return 'c-calendar-day__point';
      }
      if (selection.start === date) {
        return 'c-calendar-day__range--start';
      }
      if (selection.end === date) {
        return 'c-calendar-day__range--end';
      }
      if (isBefore(date, selection.end) && isAfter(date, selection.start) || isBefore(date, selection.start) && isAfter(date, selection.end)) {
        return 'c-calendar-day__range--middle';
      }
    };

    return {
      shortWeekNames,
      handleSelection,
      updateSelection,
      deleteSelection,
      getSelectionClasses,
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
