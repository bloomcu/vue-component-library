<template>
  <section
    class="bg-cover bg-center bg-no-repeat padding-y-xxl"
    :style="`background-image: url(${
      image.src || 'http://placeimg.com/640/480/city'
    })`"
  >
    <div class="container max-width-adaptive-sm">
      <ContentComponent
        v-bind="{ ...$props, image: undefined }"
        class="bg bg-opacity-90% padding-md padding-lg@md"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Image } from '@/types';
import { defineComponent, PropType } from '@vue/composition-api';
import ContentComponent from '../Content/ContentComponent.vue';
import { useProps } from '@/composables/useProps';
useProps();
export default defineComponent({
  components: { ContentComponent },
  props: {
    ...useProps().group(['ContentComponent']),
    image: {
      type: Object as PropType<Image>,
      default: () => ({}),
    },
  },
});
</script>
