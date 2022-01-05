<template>
    <div class="height-100%">
        <button @click="open = !open" class="reset mega-nav__control js-mega-nav__control js-tab-focus">
            {{ text }}
            <DropdownIcon />
        </button>
        <Dropdown2 :open="open" @toggleDropdown="() => open = false" />
        <div class="mega-nav__sub-nav-wrapper">
            <div class="mega-nav__sub-nav" :class="`mega-nav__sub-nav--layout`">
                <!-- <LinkRepeater :links="group" /> -->
                <LinkRepeater :links="children" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { GlobalCtaLink, GroupItem } from "@/types"
import { defineComponent, PropType, ref } from "@vue/composition-api"
import DropdownIcon from "./DropdownIcon.vue"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
import Dropdown2 from "./Dropdown2.vue"
interface Child extends GlobalCtaLink {
    children: GroupItem[]
}
export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: ''
        },
        children: {
            type: Array as PropType<GroupItem[]>,
            default: () => ([])
        },
        group: {
            type: Object as PropType<Child>,
            default: () => ({
                children: []
            })
        }
    },
    components: { DropdownIcon, LinkRepeater, Dropdown2 },
    setup() {
        const open = ref(false)
        return {
            open
        }
    }
})
</script>

