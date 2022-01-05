<template>
    <component class="cody-link" :class="{
        block
    }" :is="determineComponent">
        <slot />
        {{ text }}
    </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: 'CodyLink',
    props: {
        text: {
            type: String,
            default: ''
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        // hardcode for now but we will eventually make this recognize if it's a vue or nuxt app
        const determineComponent = computed(() => 'a')
        return {
            determineComponent
        }
    }
})
</script>


<style lang="scss">
@use './CodyLink.scss';
</style>