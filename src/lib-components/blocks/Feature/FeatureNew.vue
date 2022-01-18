<template>
  <section class="position-relative">
    <div class="container max-width-adaptive-lg">
      <div class="grid gap-md items-center">
        <!-- Column: Content -->
        <div
          class="col-6@md"
          :class="invert ? 'order-2@md' : ''"
        >
          <ContentComponentNew
            :label="label"
            :title="title"
            :subtitle="subtitle"
            :buttons="buttons"
          />
        </div>

        <!-- Column: Image -->
        <div class="col-6@md">
          <figure>
            <img
              class="block width-100%"
              v-bind="image"
            >
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

// Components
import ContentComponentNew from '@/lib-components/blocks/Content/ContentComponent.vue'

// Types
import { Button, Image } from '@/types'

export default defineComponent({
  name: 'Feature',

  props: {
    invert: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'The label'
    },
    title: {
      type: String,
      default: 'The title'
    },
    subtitle: {
      type: String,
      default: 'The subtitle'
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => [
        {
          text: 'Button Text',
          href: '/button-href',
          variant: 'primary'
        },
        {
          text: 'Link Text',
          href: '/button-href'
        }
      ]
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'https://d25r5txdw1c9o7.cloudfront.net/fit-in/650x450/files/1cd9f6c0d0966a8086978a85fb6a0a7e.jpg'
      })
    }
  },

  components: { ContentComponentNew }
})
</script>
