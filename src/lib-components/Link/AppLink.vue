<template>
  <component
    :is="determineComponent"
    class="cody-link"
    :class="{
      block,
    }"
  >
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
    },
    block: {
      type: Boolean,
      default: false
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

<style lang="scss">
@use './styles/AppLink.scss';
</style>
