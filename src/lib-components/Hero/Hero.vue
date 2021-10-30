<template>
    <section
        class="hero bg padding-y-xxl"
        :class="getVariantClasses.parentClass"
        v-bind="{
            ...(backgroundImageSrc && { style: `background-image: url('${backgroundImageSrc}')` })
        }"
    >
        <div :class="getVariantClasses.containerWidthClass" class="container">
            <div :class="getVariantClasses.parentTextClass">
                <div class="text-sm opacity-60% margin-bottom-xxs">{{ label }}</div>
                <div class="text-component margin-bottom-sm">
                    <h1>{{ header }}</h1>
                    <p>{{ subHeader }}</p>
                </div>
                <div :class="getVariantClasses.ctaClass" class="flex flex-wrap gap-sm">
                    <CodyButton
                        @click="button.buttonClick || null"
                        v-bind="button"
                    >{{ button.buttonText }}</CodyButton>
                    <Link
                        :href="ctaLink && ctaLink.href || '#'"
                        :target="ctaLink && ctaLink.target"
                        class="color-inherit"
                    >{{ ctaLink && ctaLink.text }}</Link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
// import { GlobalCodyButtonProps, GlobalCtaLink } from "@/types";
import { useProps } from "@/composables";
import { defineComponent, PropType, computed } from "@vue/composition-api";
import CodyButton from "../CodyButton/CodyButton.vue";
import Link from "../Link/Link.vue";

type variant = 'default' | 'center' | 'bg-img' | 'left-content' | 'right-content' | 'overlay-layer' | 'full-screen'
const { ctaSet } = useProps()
export default defineComponent({
    components: { CodyButton, Link },
    props: {
        ...ctaSet,
        label: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            default: ''
        },
        subHeader: {
            type: String,
            default: ''
        },
        variant: {
            type: String as PropType<variant>,
            default: 'default'
        },
        backgroundImageSrc: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const getVariantClasses = computed(() => {
            if (props.variant === 'center') {
                return {
                    parentTextClass: 'text-center',
                    ctaClass: 'flex-center'
                }
            }
            if (props.variant === 'left-content') {
                return {
                    containerWidthClass: 'max-width-adaptive-lg',
                    parentTextClass: 'max-width-xs'
                }
            }
            if (props.variant === 'right-content') {
                return {
                    containerWidthClass: 'max-width-adaptive-lg',
                    parentTextClass: 'text-right max-width-xs margin-left-auto',
                    ctaClass: 'items-center justify-end'
                }
            }
            if (props.variant === 'overlay-layer') {
                return {
                    parentClass: 'hero--overlay-layer relative',
                    parentTextClass: 'position-relative z-index-2 text-center',
                    ctaClass: 'flex-center'
                }
            }
            if (props.variant === 'full-screen') {
                return {
                    parentClass: 'min-height-100vh flex items-center',
                    parentTextClass: 'max-width-xs'
                }
            }
            return {
                parentTextClass: '',
                ctaClass: 'items-center',
                containerWidthClass: 'max-width-adaptive-sm'
            }
        })
        return {
            getVariantClasses,
        }
    }
})
</script>