<template>
  <AppLink
    v-bind="{...$props, ...$attrs}"
    class="reset mega-nav__control js-mega-nav__control"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppLink from '@/lib-components/elements/Link/AppLink.vue'
export default defineComponent({
  components: { AppLink },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>
