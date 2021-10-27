<template>
  <div>
    {{ atest }}
  <CodyButton>Hello</CodyButton>
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodyButton from './CodyButton.vue';

export default defineComponent({
    setup() {
        return {
            atest: "hello"
        };
    },
    components: { CodyButton }
})
</script>

<style>

</style>