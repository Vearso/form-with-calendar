<template>
  <c-form :data="data" />
</template>

<script>
import { defineComponent } from 'vue';
import CForm               from '@/components/form/form.component.vue';

export default defineComponent({
  name: 'App',
  components: {
    CForm,
  },
  setup() {
    const data = {
      price: '232 zł',
      rating: 4.2,
      numberOfRatings: 123,
      disabledDates: ['2021-10-13','2021-10-16']
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
