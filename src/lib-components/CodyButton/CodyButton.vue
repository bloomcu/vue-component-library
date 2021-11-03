<template>
  <component :is="$attrs.href ? 'a' : 'button'" class="btn" :class="classBinds"
    ><slot
  /></component>
</template>

<script lang="ts">
import { appendToSet } from '@/helpers'
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
     
      if (props.variant) {
        classSet = appendToSet(`btn--${props.variant}`, classSet)
      }
      if (props.size) {
        classSet = appendToSet(`btn--${props.size}`, classSet)
      }
      if (props.icon) {
       classSet = appendToSet(`btn--icon`, classSet)
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
