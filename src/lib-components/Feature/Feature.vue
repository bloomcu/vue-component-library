<template>
    <section class="position-relative z-index-1">
        <div class="container max-width-adaptive-lg">
            <div class="grid gap-md items-center">
                <div :class="getVariantClasses.firstColumn" class="col-6@md">
                    <div class="text-component">
                        <p class="text-sm color-contrast-medium">{{ label }}</p>
                        <h1>{{ header }}</h1>
                        <p>{{ subHeader }}</p>
                    </div>
                    <div class="margin-top-sm">
                        <div
                            :class="getVariantClasses.ctaColumnClass"
                            class="flex flex-wrap gap-sm"
                        >
                            <CodyButton
                                @click="button && button.buttonClick || null"
                                v-bind="button"
                            >{{ button && button.buttonText }}</CodyButton>
                            <Link
                                :href="ctaLink && ctaLink.href || '#'"
                                :target="ctaLink && ctaLink.target"
                                class="color-inherit"
                            >{{ ctaLink && ctaLink.text }}</Link>
                        </div>
                    </div>
                </div>

                <div :class="getVariantClasses.secondColumn" class="col-6@md">
                    <figure>
                        <img class="block width-100%" v-bind="image" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
// import { GlobalCodyButtonProps, GlobalCtaLink } from '@/types'
import { useProps } from '@/composables'
import CodyButton from "../CodyButton/CodyButton.vue";
import Link from "../Link/Link.vue";
type FeatureVariant = 'default' | 'invert' | 'center-x'
const { ctaSet, labelHeaderSet, image } = useProps()
export default defineComponent({
    props: {
        ...ctaSet,
        ...labelHeaderSet,
        image,
        variant: {
            type: String as PropType<FeatureVariant>,
            default: "default"
        },
    },
    setup(props) {
        const getVariantClasses = computed(() => {
            let defaultClasses = {
                firstColumn: '',
                secondColumn: '',
                columnParentClass: '',
                containerWidthClass: '',
                parentTextClass: '',
                ctaClass: '',
                ctaColumnClass: 'items-center'
            }
            if (props.variant === 'invert') {
                return {
                    ...defaultClasses,
                    firstColumn: 'order-2@md',
                    secondColumn: 'order-1@md',
                }
            }
            if (props.variant === 'center-x') {
                return {
                    ...defaultClasses,
                    firstColumn: 'text-center',
                    secondColumn: 'text-center',
                    ctaColumnClass: 'flex-center'
                }
            }
            return defaultClasses
        })
        return {
            getVariantClasses,
        }
    },
    components: { CodyButton, Link }
})
</script>