<template>
  <div class="c-form">
    <c-form-header
      :price="data.price"
      :rating="data.rating"
      :number-of-ratings="data.numberOfRatings"
    />
    <c-form-date-picker :label="'Dates'" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CFormHeader         from '@/components/form/components/form-header/form-header.component.vue';
import CFormDatePicker     from '@/components/form/components/form-date-picker/form-date-picker.component.vue';

export default defineComponent({
  name: 'CForm',
  components: {
    CFormDatePicker,
    CFormHeader,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.c-form {
  width: 30%;
  padding: 1.3rem;
}
</style>
