<template>
  <component :is="$attrs.href ? 'a' : 'button'" class="btn" :class="classBinds"
    ><slot
  /></component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { Variant, Size } from '../../types'
export default defineComponent({
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'accent',
    },
    size: {
      type: String as PropType<Size>,
      default: '',
    },
    icon: Boolean,
  },
  setup(props) {
    const classBinds = computed(() => {
      let classSet = ''
      // to check if the appended class needs to be spaced or not
      let appendToSet = (str: string): void => {
        if (classSet.trim().length) {
          classSet += ` ${str}`
        } else {
          classSet = `${str}`
        }
      }
      if (props.variant) {
        appendToSet(`btn--${props.variant}`)
      }
      if (props.size) {
        appendToSet(`btn--${props.size}`)
      }
      if (props.icon) {
        appendToSet(`btn--icon`)
      }
      return classSet
    })
    return {
      classBinds,
    }
  },
})
</script>

<style></style>
