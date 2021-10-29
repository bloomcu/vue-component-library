<template>
  <div>
    <Hero :button="{
      href: '/helloworld',
      target: '__blank'
    }" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodyButton from './CodyButton/CodyButton.vue';
import Hero from './Hero/Hero.vue';

export default defineComponent({
    setup() {
        return {
            atest: "hello"
        };
    },
    components: { CodyButton, Hero }
})
</script>

<style>

</style>