<template>
  <component
    :is="image.href ? 'a' : 'div'"
    v-bind="{
      ...(image.href && { href: image.href }),
    }"
  >
    <img v-bind="image">
  </component>
</template>

<script lang="ts">
import { Image } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<Image>,
      default: () => ({})
    }
  }
  // setup(props) {

  // }
})
</script>
