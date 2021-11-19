<template>
    <div id="app">
        <component
            v-for="(block, index) in blocks"
            v-bind="block"
            :is="block.component"
            :key="index"
        />
        <component
            v-for="modal in modals"
            v-bind="modal"
            is="Modal"
            :key="modal.uuid"
        />
        <v-codyhouse-components-sample />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// import { VCodyhouseComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',

  setup() {
      const { blocks, modals } = require('@/json/blocks')
      return {
          blocks,
          modals
      }
  }
});
</script>
