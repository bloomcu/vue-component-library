<template>
    <div class="mega-nav__sub-nav-wrapper">
        <div class="mega-nav__sub-nav" :class="`mega-nav__sub-nav--layout`">
            <!-- <LinkRepeater :links="group" /> -->
            <LinkRepeater :links="children" />
        </div>
    </div>
</template>

<script lang="ts">
import { Child } from "@/types"
import { defineComponent, PropType } from "@vue/composition-api"
import LinkRepeater from "../../LinkRepeater/LinkRepeater.vue"
export default defineComponent({
    props: {
        children: {
            type: Array as PropType<Child[]>,
            default: () => ([])
        },
    },
    components: { LinkRepeater }
})
</script>