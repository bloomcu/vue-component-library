<template>
  <component :is="determineComponent">
    <slot />
    {{ text }}
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'AppLink',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup () {
    // hardcode for now but we will eventually make this recognize if it's a vue or nuxt app
    const determineComponent = computed(() => 'a')
    return {
      determineComponent
    }
  }
})
</script>
