<template>
  <div>
    <Hero 
    label="This is  label"
    header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
    sub-header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
    :cta="{
      text: 'Learn more',
      href: '#/test'
    }"
    :button="{
      href: '/helloworld',
      target: '__blank',
      buttonText: 'Download',
      variant: 'primary'
    }" 
    variant="center"
    />
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