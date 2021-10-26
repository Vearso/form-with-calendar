<template>
  <div/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CForm',
  props: {
    price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    numberOfRatings: {
      type: Number,
      required: true,
    },
    availableDates: {
      type: Array,
      default: () => [],
    },
    selectedDates: {
      type: Array,
      default: () => [],
    }
  }
});
</script>

<style scoped>

</style>
