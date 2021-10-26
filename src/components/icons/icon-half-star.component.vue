<template>
  <svg
    class="c-icon-star"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <defs>
      <linearGradient
        id="half-star-gradient"
      >
        <stop
          offset="0%"
          stop-color="var(--currentColor)"
        />
        <stop
          offset="49%"
          stop-color="var(--currentColor)"
        />
        <stop
          offset="50%"
          stop-color="var(--gray-900)"
        />
        <stop
          offset="100%"
          stop-color="var(--gray-900)"
        />
      </linearGradient>
    </defs>
    <path
      d="M3.582,16.492a.825.825,0,0,1-.5-.169.908.908,0,0,1-.331-.916l1.029-4.731L.292,7.481a.912.912,0,0,1-.249-.943.859.859,0,0,1,
          .731-.61l4.619-.438L7.219,1.032a.837.837,0,0,1,1.564,0l1.826,4.46,4.618.438a.858.858,0,0,1,.732.61.912.912,0,0,1-.249.943l-3.491,
          3.194,1.029,4.731a.907.907,0,0,1-.331.916.819.819,0,0,1-.935.042L8,13.881,4.018,16.366a.826.826,0,0,1-.436.126ZM5.357,5.577h0Zm5.285,0h0Zm0,0"
      transform="translate(-0.001 -0.492)"
    />

  </svg>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CIconHalfStar'
})
</script>

<style lang="scss"
       scoped>
.c-icon-star {
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: url(#half-star-gradient);
  }
  --currentColor: currentColor;
}
</style>
