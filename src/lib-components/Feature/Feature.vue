<template>
    <section class="position-relative z-index-1">
        <div class="container max-width-adaptive-lg">
            <div class="grid gap-md items-center">
                <div class="col-6@md">
                    <div class="text-component">
                        <p class="text-sm color-contrast-medium">This is a Label</p>
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>
                    </div>
                    <div class="margin-top-sm">
                        <div class="flex flex-wrap gap-sm items-center">
                            <CodyButton
                                @click="button && button.buttonClick || null"
                                v-bind="button"
                            >{{ button && button.buttonText }}</CodyButton>
                            <a href="#0" class="color-inherit">Learn more</a>
                        </div>
                    </div>
                </div>

                <div class="col-6@md">
                    <figure>
                        <img
                            class="block width-100%"
                            src="https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png"
                            alt="Image description"
                        />
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
// import { GlobalCodyButtonProps, GlobalCtaLink } from '@/types'
import { useProps } from '@/composables'
import CodyButton from "../CodyButton/CodyButton.vue";
type FeatureVariant = 'default' | 'invert' | 'center-x'
const { ctaSet } = useProps()
export default defineComponent({
    props: {
        ...ctaSet,
        variant: {
            type: String as PropType<FeatureVariant>,
            default: "default"
        },
    },
    setup() { },
    components: { CodyButton }
})
</script>