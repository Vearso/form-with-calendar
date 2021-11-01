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
      :class="[getSelectionClasses(day.date), checkIfDateIsDisabled(day.date) ? 'c-calendar-day--inactive' : 'c-calendar-day--active']"
      @click.stop="handleSelection(day)"
      @mouseenter="updateSelection(day)"
      @mouseleave="deleteSelection(day)"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
}                         from 'vue';
import CCalendarDay       from '@/components/calendar/components/calendar-day/calendar-day.component.vue';
import { shortWeekNames } from '@/components/calendar/hooks/use-calendar';
import {
  isBefore,
  isAfter,
  format,
  parseISO,
}                         from 'date-fns';

export default defineComponent({
  name: 'CCalendarMonth',
  components: { CCalendarDay },
  props: {
    selectedDates: {
      type: Object,
      required: true,
    },
    month: {
      type: Array,
      required: true,
    },
    disabledDates: {
      type: Array,
      required: true,
    },
  },
  emits: [ 'select-day', 'selection-end', 'selection' ],
  setup(props, context) {
    const selection = reactive({
      initial: null,
      start: props.selectedDates.min,
      end: props.selectedDates.max,
    });

    const handleSelection = (day) => {
      if (!checkIfDateIsDisabled(day.date)) {
        if (!selection.initial) {
          selection.initial = day.date;
          selection.end = null;
          selection.start = null;
        } else {
          if (isBefore(day.date, selection.initial) && checkDateRange(day.date, selection.initial)) {
            selection.start = day.date;
            selection.end = selection.initial;
            context.emit('selection', {
              min: selection.start,
              max: selection.end,
            });
          } else if (isAfter(day.date, selection.initial) && checkDateRange(selection.initial, day.date)) {
            selection.start = selection.initial;
            selection.end = day.date;
            context.emit('selection', {
              min: selection.start,
              max: selection.end,
            });
          } else if(day.date.getTime() === selection.initial.getTime()){
            context.emit('selection', {
              min: selection.initial,
              max: selection.initial,
            });
          } else {
            alert('Includes disabled dates');
            selection.end = null;
            selection.start = null;
          }
          selection.initial = null;
        }
      }
    };

    const updateSelection = (day) => {
      if (selection.initial) {
        if (isBefore(day.date, selection.initial)) {
          selection.end = selection.initial;
          selection.start = day.date;
        } else {
          selection.start = selection.initial;
          selection.end = day.date;
        }
      }
    };

    const deleteSelection = (day) => {
      if (selection.initial) {
        if (isBefore(day.date, selection.initial)) {
          selection.start = null;
        } else {
          selection.end = null;
        }
      }
    };

    const getSelectionClasses = (date) => {
      if (selection.start?.getTime() === date.getTime() && selection.end?.getTime() === date.getTime()) {
        return 'c-calendar-day__point';
      }
      if (selection.start?.getTime() === date.getTime()) {
        return 'c-calendar-day__range--start';
      }
      if (selection.end?.getTime() === date.getTime()) {
        return 'c-calendar-day__range--end';
      }
      if (isBefore(date, selection.end) && isAfter(date, selection.start) || isBefore(date, selection.start) && isAfter(date, selection.end)) {
        return 'c-calendar-day__range--middle';
      }
    };

    const checkIfDateIsDisabled = (date) => props.disabledDates.includes(format(date, 'yyyy-MM-dd'));
    const checkDateRange = (min,max) => !props.disabledDates.some(disabledDate => {
      return isAfter(parseISO(disabledDate),min) && isBefore(parseISO(disabledDate),max)

    });

    return {
      selection,
      shortWeekNames,
      handleSelection,
      updateSelection,
      deleteSelection,
      getSelectionClasses,
      checkIfDateIsDisabled,
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
