<template>
  <c-form :data="data" />
  <c-calendar />
</template>

<script>
import CForm               from '@/components/form/form.component.vue';
import { defineComponent } from 'vue';
import CCalendar           from '@/components/calendar/calendar.component.vue';

export default defineComponent({
  name: 'App',
  components: { CCalendar, CForm },
  setup() {
    const data = {
      price: '232 zł',
      rating: 4.2,
      numberOfRatings: 123,
    };

    return {
      data,
    };
  },
});
</script>

<style lang="scss">
@import "assets/global.scss";
</style>
