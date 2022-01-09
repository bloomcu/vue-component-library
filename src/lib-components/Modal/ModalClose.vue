<template>
  <button
    @click="toggle(uuid)"
    class="reset modal__close-btn modal__close-btn--outer display@md js-modal__close js-tab-focus"
  >
    <svg class="icon icon--sm" viewBox="0 0 24 24">
      <title>Close modal window</title>
      <g
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="3" x2="21" y2="21" />
        <line x1="21" y1="3" x2="3" y2="21" />
      </g>
    </svg>
  </button>
</template>

<script lang="ts">
import useToggle from '@/composables/useToggle';
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  setup: () => ({
    toggle: useToggle().toggle,
  }),
});
</script>
