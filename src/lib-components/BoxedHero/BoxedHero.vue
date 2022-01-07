<template>
    <section
        class="bg-cover bg-center bg-no-repeat padding-y-xxl"
        :style="`background-image: url(${image.src || 'http://placeimg.com/640/480/city'})`"
    >
        <div class="container max-width-adaptive-sm">
            <ContentComponent v-bind="{...$props, image: undefined }" class="bg bg-opacity-90% padding-md padding-lg@md" />
        </div>
    </section>
</template>

<script lang="ts">
import { GlobalCodyButton, GlobalImage } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import ContentComponent from '../Content/ContentComponent.vue'
export default defineComponent({
    components: { ContentComponent },
    props: {
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
            type: Array as PropType<Array<GlobalCodyButton>>,
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
})
</script>