<template>
  <div>
    <Hero 
    header="Hello"
    sub-header="Hello 2"
    label="Label"
    :cta="{
      text: 'Tests'
    }"
    :button="{
      href: '/helloworld',
      target: '__blank',
      buttonText: 'Hello world'
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