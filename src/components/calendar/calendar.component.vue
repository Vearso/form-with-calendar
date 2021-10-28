<template>
  <div
    class="c-shadow"
    @click="$emit('close-calendar')"
  >
    <div class="c-calendar">
      <c-calendar-header
        :month-name="currentMonthAndYear"
        @next-month="setNextMonth()"
        @prev-month="setPrevMonth()"
      />
      <c-calendar-month
        :disabled-dates="disabledDates"
        :month="month"
        :selected-dates="dateRange"
        @selection="$emit('update:dateRange',$event)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CCalendarMonth      from '@/components/calendar/components/calendar-month/calendar-month.component.vue';
import CCalendarHeader     from '@/components/calendar/components/calendar-header/calendar-header.component.vue';
import { useCalendar }     from '@/components/calendar/hooks/use-calendar';

export default defineComponent({
  name: 'CCalendar',
  components: {
    CCalendarHeader,
    CCalendarMonth,
  },
  props: {
    dateRange: {
      type: Object,
      required: true,
    },
    disabledDates: {
      type: Array,
      default: () => [],
    },
  },
  emits: [ 'next-month', 'update:dateRange', 'close-calendar' ],
  setup() {
    const {
      setNextMonth,
      setPrevMonth,
      month,
      currentMonthAndYear,
    } = useCalendar();

    return {
      currentMonthAndYear,
      month,
      setNextMonth,
      setPrevMonth,
    };
  },
});
</script>

<style scoped lang="scss">
.c-calendar {
  position: absolute;
  top: 10rem;
  left: 2rem;
  border: .1px solid black;
  display: flex;
  flex-direction: column;
  width: 35.2rem;
}
</style>
