<template>
  <div class="c-calendar-month">
    <c-calendar-day
      v-for="(day,index) in month"
      :key="index"
      :day="day"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CCalendarDay        from '@/components/calendar/components/calendar-day/calendar-day.vue';

export default defineComponent({
  name: 'CCalendarMonth',
  components: { CCalendarDay },
  props: {
    month: {
      type: Array,
      required: true,
    }
  }
});
</script>

<style scoped>
.c-calendar-month {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5,1fr);
}
</style>
