<template>
  <AppLink
    class="subnav__link"
    :aria-current="active ? 'page' : ''"
    v-bind="{...$props, ...$attrs}"
  />
</template>

<script lang="ts">
import { useProps } from '@/composables/useProps'
import { defineComponent } from '@vue/composition-api'
import AppLink from '@/lib-components/elements/Link/AppLink.vue'

export default defineComponent({
  components: { AppLink },
  props: {
    ...useProps().group(['Link']),
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>
