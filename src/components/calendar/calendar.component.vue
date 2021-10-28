<template>
  <c-calendar-month :month="allVisibleDays" />
</template>

<script>
import { defineComponent } from 'vue';
import { useCalendar }     from '@/components/calendar/hooks/use-calendar';
import CCalendarMonth      from '@/components/calendar/components/calendar-month/calendar-month.component.vue';

export default defineComponent({
  name: 'CCalendar',
  components: { CCalendarMonth },
  setup() {
    const {allVisibleDays} = useCalendar();

    return {
      allVisibleDays
    }
  }
});
</script>

<style scoped>

</style>
