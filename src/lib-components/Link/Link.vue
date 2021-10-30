<template>
    <component :is="determineComponent">
        <slot />
    </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
export default defineComponent({
    setup() {
        // hardcode for now but we will eventually make this recognize if it's a vue or nuxt app
        const determineComponent = computed(() => 'a')
        return {
            determineComponent
        }
    }
})
</script>