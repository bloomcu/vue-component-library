<template>
    <section
        class="hero bg padding-y-xxl"
        v-bind="{
            ...(backgroundImageSrc && { style: `background-image: url('${backgroundImageSrc}')` })
        }"
    >
        <div class="container max-width-adaptive-sm">
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
                    <a
                        :href="cta && cta.link || '#'"
                        class="color-inherit"
                    >{{ cta && cta.text || '' }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { GlobalCodyButtonProps } from "@/types";
import { defineComponent, PropType, computed } from "@vue/composition-api";
import CodyButton from "../CodyButton/CodyButton.vue";
interface cta {
    link?: String
    text?: String
}
type variant = 'default' | 'center' | 'bg-img' | 'left-content' | 'right-content' | 'overlay-layer' | 'full-screen'
export default defineComponent({
    components: { CodyButton },
    props: {
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
        button: {
            type: Object as PropType<GlobalCodyButtonProps>,
            default: () => { }
        },
        cta: {
            type: Object as PropType<cta>,
            default: () => { }
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
            return {
                getTextClass: '',
                ctaClass: 'items-center'
            }
        })
        return {
            getVariantClasses,
        }
    }
})
</script>