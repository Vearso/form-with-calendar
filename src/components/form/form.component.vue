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
}                      from 'vue';
import CFormHeader     from '@/components/form/components/form-header/form-header.component.vue';
import CFormDatePicker from '@/components/form/components/form-date-picker/form-date-picker.component.vue';
import CCalendar       from '@/components/calendar/calendar.component';
import { parseISO }    from 'date-fns';

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
  setup(props) {
    const dateRange = ref({
      min: parseISO(props.data.selectedDates.min),
      max: parseISO(props.data.selectedDates.max),
    });
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
  margin: 1.3rem;
  width: 30%;
  border: 1px solid var(--gray-900);
  background-color: var(--gray-500);
  padding: 1.3rem;
}
</style>
