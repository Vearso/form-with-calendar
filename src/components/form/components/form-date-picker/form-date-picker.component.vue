<template>
  <div class="c-form-date-picker">
    <span class="c-form-date-picker__label">{{ label }}</span>
    <div class="c-form-date-picker__select">
      <span class="c-form-date-picker__select__placeholder">{{ leftPlaceholder }}</span>
      <c-icon-arrow-right />
      <span class="c-form-date-picker__select__placeholder">{{ rightPlaceholder }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CIconArrowRight     from '@/components/icons/icon-arrow-right.component.vue';

export default defineComponent({
  name: 'CFormDatePicker',
  components: { CIconArrowRight},
  props: {
    label: {
      type: String,
      required: true,
    },
    leftPlaceholder: {
      type: String,
      default: 'Check In',
    },
    rightPlaceholder: {
      type: String,
      default: 'Check Out',
    },
  },
});
</script>

<style scoped lang="scss">
.c-form-date-picker {
  margin-top: 3.4rem;
  &__label {
    font-weight: bold;
  }
  &__select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    border: 1px solid black;
    margin: .5rem 0;
    padding: 1.3rem .5rem;

    &__placeholder {
      flex-grow: 1;
      margin: 0 .8rem;
      cursor: pointer;
      padding: .5rem;
      border-radius: .5rem;

      &:hover {
        background-color: var(--primary-300);
      }
    }
  }
}
</style>
