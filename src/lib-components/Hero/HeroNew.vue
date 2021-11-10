<template>
    <section
        :class="classBinds"
        class="hero bg position-relative padding-y-xxl"
        v-bind="{
            ...(image && { style: `background-image: url('${image.src}')` })
        }"
    >
        <div class="container max-width-adaptive-lg">
            <div class="content-wrapper position-relative max-width-xs z-index-2">
                <ContentComponentNew
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
import { defineComponent, PropType, computed } from "@vue/composition-api";
import { appendToSet } from '@/helpers'

// Components
import ContentComponentNew from "../Content/ContentComponent.vue";

// Types
import { GlobalCodyButtonProps, GlobalImage } from "@/types";

export default defineComponent({
    name: 'hero',

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
            default: 'The label',
        },
        title: {
            type: String,
            default: 'The title',
        },
        subtitle: {
            type: String,
            default: 'The subtitle'
        },
        buttons: {
            type: Array as PropType<Array<GlobalCodyButtonProps>>,
            default: () => ([
                {
                    text: 'Button Text',
                    href: '/button-href',
                    variant: 'primary'
                },
                {
                    text: 'Link Text',
                    href: '/button-href',
                }
            ]),
        },
        image: {
            type: Object as PropType<GlobalImage>,
            default: () => ({}),
        },
    },

    setup(props) {
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

        return {
          classBinds,
        }
    },

    components: { ContentComponentNew },
})
</script>

<style lang="scss">
    @import './style/style.scss';
</style>
