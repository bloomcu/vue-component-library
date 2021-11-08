<template>
    <section class="hero bg padding-y-xxl">
        <div class="container max-width-adaptive-sm">
            <div v-if="label" class="text-sm opacity-60% margin-bottom-xxs">{{ label }}</div>

            <div class="text-component margin-bottom-sm">
                <h1>{{ header }}</h1>
                <p>{{ subHeader }}</p>
            </div>

            <div class="flex flex-wrap items-center gap-sm">
                <CodyButton
                    v-if="button"
                    @click="button.buttonClick || null"
                    v-bind="button"
                >{{ button.buttonText }}</CodyButton>
                <Link
                    v-if="ctaLink"
                    :href="ctaLink.href || '#'"
                    :target="ctaLink.target"
                    class="color-inherit"
                >{{ ctaLink.text }}</Link>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import { GlobalCtaLink, GlobalCodyButtonProps } from "@/types"
import Link from "../Link/Link.vue"
import CodyButton from "../CodyButton/CodyButton.vue"
export default defineComponent({
    props: {
        label: {
            type: String,
            default: ""
        },
        header: {
            type: String,
            default: ""
        },
        subHeader: {
            type: String,
            default: ""
        },
        button: {
            type: Object as PropType<GlobalCodyButtonProps>,
            default: () => { },
        },
        ctaLink: {
            type: Object as PropType<GlobalCtaLink>,
            default: () => { },
        },
    },
    components: { Link, CodyButton }
})
</script>