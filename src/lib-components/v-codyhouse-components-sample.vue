<template>
  <div>
    <ContentComponent
      label="This is  label"
      header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      sub-header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
      :ctaLink="{
        text: 'Learn more',
        href: '#/test',
        target: '__blank'
      }"
      :button="{
        href: '/helloworld',
        target: '__blank',
        buttonText: 'Download',
        variant: 'primary'
      }"
    />
    <Hero
      label="This is  label"
      header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      sub-header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
      :ctaLink="{
        text: 'Learn more',
        href: '#/test',
        target: '__blank'
      }"
      :button="{
        href: '/helloworld',
        target: '__blank',
        buttonText: 'Download',
        variant: 'primary'
      }"
      backgroundImageSrc="https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png"
    />
    <Feature
      label="This is  label"
      header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      sub-header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
      :ctaLink="{
        text: 'Learn more',
        href: '#/test',
        target: '__blank'
      }"
      :button="{
        href: '/helloworld',
        target: '__blank',
        buttonText: 'Download',
        variant: 'primary',
      }"
      :image="{
        src: 'https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png'
      }"
      variant="invert"
    />
    <Grid />
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodyButton from './CodyButton/CodyButton.vue';
import Hero from './Hero/Hero.vue';
import Feature from './Feature/Feature.vue';
import Grid from './Grid/Grid.vue';
import ContentComponent from './Content/ContentComponent.vue';

export default defineComponent({
  setup() {
    return {
      atest: "hello"
    };
  },
  components: { CodyButton, Hero, Feature, Grid, ContentComponent }
})
</script>

<style>
</style>