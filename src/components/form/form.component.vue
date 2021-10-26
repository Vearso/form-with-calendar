<template>
  <div class="c-form">
    <c-form-header :price="data.price" :rating="data.rating" :number-of-ratings="data.numberOfRatings" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CFormHeader from '@/components/form/components/form-header/form-header.component.vue'

export default defineComponent({
  name: 'CForm',
  components: { CFormHeader },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
