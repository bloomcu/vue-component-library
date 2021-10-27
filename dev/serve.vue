<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VCodyhouseComponentsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VCodyhouseComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <v-codyhouse-components-sample />
  </div>
</template>
