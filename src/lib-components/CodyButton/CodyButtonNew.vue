<template>
    <component :is="$attrs.href ? 'a' : 'button'" class="color-inherit" :class="classBinds">
        {{ text }}
    </component>
</template>

<script lang="ts">
import { appendToSet } from '@/helpers'
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { Variant, Size } from '../../types'
export default defineComponent({
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: '',
    },
    size: {
      type: String as PropType<Size>,
      default: '',
    },
    text: {
        type: String,
        default: 'Button Text'
    },
    icon: Boolean,
  },

  setup(props) {
    const classBinds = computed(() => {
      let classSet = ''
      // to check if the appended class needs to be spaced or not

      if (props.variant) {
        classSet = appendToSet(`btn btn--${props.variant}`, classSet)
      }
      if (props.size) {
        classSet = appendToSet(`btn btn--${props.size}`, classSet)
      }
      if (props.icon) {
       classSet = appendToSet(`btn btn--icon`, classSet)
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
