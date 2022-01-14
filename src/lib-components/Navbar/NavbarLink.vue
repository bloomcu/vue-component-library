<template>
  <AppLink class="reset mega-nav__control js-mega-nav__control">
    {{ text }}
  </AppLink>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppLink from '../Link/AppLink.vue'
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
