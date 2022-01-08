<template>
    <button @click="$emit('click')" class="reset mega-nav__control js-mega-nav__control js-tab-focus">
        {{ text }}
        <DropdownIcon />
    </button>
</template>


<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import DropdownIcon from "../DropdownIcon.vue"
export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    setup() {
        return {};
    },
    components: { DropdownIcon }
})
</script>
