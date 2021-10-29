<template>
    <section class="hero bg padding-y-xxl">
        <div class="container max-width-adaptive-sm">
            <div class="text-sm opacity-60% margin-bottom-xxs">{{ label }}</div>

            <div class="text-component margin-bottom-sm">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!</p>
            </div>

            <div class="flex flex-wrap items-center gap-sm">
                <CodyButton @click="button.buttonClick"  v-bind="button">Download</CodyButton>
                <a href="#0" class="color-inherit">Learn more</a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { GlobalCodyButtonProps } from "@/types";
import { defineComponent, PropType } from "@vue/composition-api";
import CodyButton from "../CodyButton/CodyButton.vue";
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
        }
    }
})
</script>