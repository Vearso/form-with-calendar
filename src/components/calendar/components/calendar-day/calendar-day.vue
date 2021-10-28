<template>
  <div class="c-calendar-day">
    {{ day.value }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CCalendarDay',
  props: {
    day: {
      type: Object,
      required: true,
    }
  }
});
</script>

<style scoped>
.c-calendar-day {
  margin: .3rem;
  border: 1px solid red;
}
</style>
