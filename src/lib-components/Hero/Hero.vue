<template>
  <section
    :class="classBinds"
    :style="styleBinds"
    class="hero bg position-relative padding-y-xxl"
  >
    <div class="container max-width-adaptive-lg">
      <div class="content-wrapper position-relative max-width-xs z-index-2">
        <ContentComponent
          :center="center"
          :label="label"
          :title="title"
          :subtitle="subtitle"
          :buttons="buttons"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'

// Components
import ContentComponent from '../Content/ContentComponent.vue'

// Types
import { Button, Image } from '@/types'

export default defineComponent({
  name: 'Hero',

  props: {
    center: {
      type: Boolean,
      default: false
    },
    fullscreen: {
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
      default: () => ({})
    }
  },

  setup (props) {
    const classBinds = computed(() => {
      let classSet = ''

      if (props.center) {
        classSet = appendToSet('hero--center', classSet)
      }
      if (props.fullscreen) {
        classSet = appendToSet('hero--full-screen', classSet)
      }
      if (props.image) {
        classSet = appendToSet('hero--background-img', classSet)
      }

      return classSet
    })

    const styleBinds = computed(() => {
      return props.image.src
        ? {
            'background-image': `url(https://d25r5txdw1c9o7.cloudfront.net/fit-in/1920x1200/${props.image.src})`
          }
        : {}
    })

    return {
      classBinds,
      styleBinds
    }
  },

  components: { ContentComponent }
})
</script>

<style lang="scss">
@import './style/style.scss';
</style>
