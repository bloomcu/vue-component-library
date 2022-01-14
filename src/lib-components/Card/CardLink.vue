<template>
  <div class="card card--is-link">
    <a class="card__link" v-bind="link">
      <figure class="card__img">
        <img v-bind="image" />
        <div class="card__link-icon" aria-hidden="true">
          <svg class="icon" viewBox="0 0 32 32">
            <g
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-miterlimit="10"
            >
              <path d="M21,5s-4.333-1.667-7,1L6,14c-2.667,2.667-1,7-1,7" />
              <path d="M27,11s1.667,4.333-1,7l-8,8c-2.667,2.667-7,1-7,1" />
              <line x1="12" y1="20" x2="4" y2="28" />
              <line x1="28" y1="4" x2="20" y2="12" />
            </g>
          </svg>
        </div>
      </figure>

      <div class="card__content">
        <div class="text-component">
          <h4>{{ title }}</h4>
          <p class="text-sm color-contrast-medium">{{ description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Image } from '@/types';
import { defineComponent, PropType } from '@vue/composition-api';
import AppButton from '../AppButton/AppButton.vue';
// Define link type
export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'This is a title',
    },
    link: {
      type: Object as PropType<HTMLAnchorElement>,
      default: () => ({
        href: 'https://website.com',
        target: '__blank',
      }),
    },
    description: {
      type: String,
      default: 'This is a description',
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'https://d25r5txdw1c9o7.cloudfront.net/fit-in/1920x1200/files/7ad98ddacea4aff50bfddf8544076d82.jpg',
      }),
    },
  },
  components: { AppButton },
});
</script>
