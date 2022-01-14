<template>
  <div>
    <!-- <Hero
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
        text: 'Download',
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
        text: 'Download',
        variant: 'primary',
      }"
      :image="{
        src: 'https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png'
      }"
      variant="invert"
    /> -->
    <!-- <Grid :cols="12" /> -->
    <!-- <TextColumns />
    <CardRepeater />
    <div class="container">
      <CardLink :link="{

      }" /> -->
    <!-- </div> -->
    <!-- <Modal /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppButton from './AppButton/AppButton.vue'
import Hero from './Hero/Hero.vue'
import Feature from './Feature/Feature.vue'
import Grid from './Grid/Grid.vue'
import TextColumns from './TextColumns/TextColumns.vue'
import Card from './Card/Card.vue'
import CardRepeater from './CardRepeater/CardRepeater.vue'
import CardLink from './Card/CardLink.vue'
import Modal from './Modal/Modal.vue'

export default defineComponent({
  components: {
    AppButton,
    Hero,
    Feature,
    Grid,
    TextColumns,
    Card,
    CardRepeater,
    CardLink,
    Modal
  },
  setup () {
    return {
      atest: 'hello'
    }
  }
})
</script>

<style></style>
