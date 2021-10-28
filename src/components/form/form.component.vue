<template>
  <div
    class="c-form"
    @click="toggleCalendar(false)"
  >
    <c-form-header
      :price="data.price"
      :rating="data.rating"
      :number-of-ratings="data.numberOfRatings"
    />
    <c-form-date-picker
      v-model="dateRange"
      :label="'Dates'"
      @toggle-calendar="toggleCalendar"
    >
      <c-calendar
        v-if="isCalendarOpen"
        v-model:dateRange="dateRange"
        :disabled-dates="data.disabledDates"
      />
    </c-form-date-picker>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
}                  from 'vue';
import CFormHeader from '@/components/form/components/form-header/form-header.component.vue';
import CFormDatePicker from '@/components/form/components/form-date-picker/form-date-picker.component.vue';
import CCalendar       from '@/components/calendar/calendar.component';

export default defineComponent({
  name: 'CForm',
  components: {
    CCalendar,
    CFormDatePicker,
    CFormHeader,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const dateRange = ref({min: null, max: null});
    const isCalendarOpen = ref(false);

    const toggleCalendar = (payload) => {
      isCalendarOpen.value = payload;
    };

    return {
      dateRange,
      toggleCalendar,
      isCalendarOpen,
    };
  },
});
</script>

<style scoped lang="scss">
.c-form {
  width: 30%;
  background-color: var(--gray-500);
  padding: 1.3rem;
}
</style>
