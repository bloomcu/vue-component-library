<template>
<section class="testimonial position-relative z-index-1 padding-y-xxl">
  <div class="container max-width-adaptive-sm">
    <figure class="flex justify-center margin-bottom-md reveal-fx reveal-fx--scale">
      <img class="block width-xxl height-xxl radius-50% border border-bg border-2 shadow-sm" v-bind="image">
    </figure>

    <div class="testimonial__block-wrapper margin-bottom-lg">
      <blockquote class="text-lg text-center line-height-md ">{{ description }}</blockquote>

      <svg class="icon icon--xxl color-contrast-higher opacity-10%" aria-hidden="true" viewBox="0 0 64 64"><polygon fill="currentColor" points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"/><polygon fill="currentColor" points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"/></svg>
    </div>
    

    <div class="text-center">
      <p class="text-uppercase letter-spacing-md"><strong>{{ title }}</strong></p>
      <p class="color-contrast-medium margin-top-xxxxs">{{ subtitle }}</p>
    </div>
  </div>
</section>
</template>


<script lang="ts">
import {  Image } from "@/types";
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'Emily Ewing'
        },
        subtitle: {
            type: String,
            default: 'Designer at CompanyXs'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque doloremque beatae! Doloremque perspiciatis aliquid repellat quasi praesentium, minima nobis assumenda ex?'
        },
        image: {
            type: Object as PropType<Image>,
            default: () => ({
                src: 'http://placeimg.com/640/480/nightlife'
            })
        },
    }
})
</script>

<style lang="scss">
@use '@/styles/base' as *;

/* -------------------------------- 

File#: _1_testimonial
Title: Testimonial
Descr: A testimonial quote 
Usage: codyhouse.co/license

-------------------------------- */

.testimonial {}

.testimonial__block-wrapper {
  position: relative;

  blockquote {
    position: relative;
    z-index: 1;
  }

  .icon {
    position: absolute;
    top: -0.5em;
    left: -0.5em;
  }
}
</style>