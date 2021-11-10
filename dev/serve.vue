<template>
    <div id="app">
        <component
            v-for="(block, index) in blocks"
            v-bind="block"
            :is="block.component"
            :key="index"
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
      const { blocks } = require('@/json/blocks')
      return {
          blocks
      }
  }
});
</script>
