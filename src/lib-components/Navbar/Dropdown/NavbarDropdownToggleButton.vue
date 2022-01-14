<template>
  <button
    class="reset mega-nav__control js-mega-nav__control js-tab-focus"
    @click="$emit('click')"
  >
    {{ text }}
    <DropdownIcon />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DropdownIcon from '../DropdownIcon.vue'
export default defineComponent({
  components: { DropdownIcon },
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
