<template>
    <div ref="dropdown" class="height-100%">
        <NavbarDropdownToggleButton :text="text" @click="open = !open" />
        <ColumnDropdown1Content :open="open" :children="children" />
        <Dropdown2 :open="open" @toggleDropdown="() => open = false" />
    </div>
</template>


<script lang="ts">
import { GlobalCtaLink, GroupItem } from "@/types"
import { defineComponent, PropType, ref } from "@vue/composition-api"
import DropdownIcon from "./DropdownIcon.vue"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
import Dropdown2 from "./Dropdown2.vue"
import useClickOutside from "@/composables/useClickOutside"
import FullWidthDropdown from "./ColumnDropdown/FullWidthDropdown.vue"
import NavbarDropdownToggleButton from "./ColumnDropdown/NavbarDropdownToggleButton.vue"
import ColumnDropdown1Content from "./ColumnDropdown1Content.vue"
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
    components: { DropdownIcon, LinkRepeater, Dropdown2, FullWidthDropdown, NavbarDropdownToggleButton, ColumnDropdown1Content },
    setup() {
        const open = ref(false)
        const dropdown = ref(null)
        useClickOutside(dropdown, () => console.log('clicked out'))
        return {
            open
        }
    }
})
</script>

