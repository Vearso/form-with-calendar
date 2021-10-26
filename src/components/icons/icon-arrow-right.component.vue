<template>
  <svg
    class="c-icon-arrow-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CIconArrowRight',
});
</script>

<style scoped lang="scss">
.c-icon-arrow-right {
  width: 2.4rem;
  height: 2.4rem;

  path {
    fill: currentColor;
  }
}
</style>
