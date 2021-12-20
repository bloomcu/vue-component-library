<template>
    <div class="height-100%">
        <button class="reset mega-nav__control js-mega-nav__control js-tab-focus">
            {{ group.link && group.link.text }}
            <DropdownIcon />
        </button>

        <div class="mega-nav__sub-nav-wrapper">
            <div class="mega-nav__sub-nav" :class="`mega-nav__sub-nav--layout`">
                <!-- <LinkRepeater :links="group" /> -->
                <LinkRepeater :links="group.children" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { GlobalCtaLink, GroupItem } from "@/types"
import { defineComponent, PropType } from "@vue/composition-api"
import DropdownIcon from "./DropdownIcon.vue"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
interface Child {
    link: GlobalCtaLink
    children: GroupItem[]
}
export default defineComponent({
    props: {
        group: {
            type: Object as PropType<Child>,
            default: () => ({
                children: []
            })
        }
    },
    components: { DropdownIcon, LinkRepeater },
})
</script>
