<template>
    <div class="height-100%">
        <button class="reset mega-nav__control js-mega-nav__control js-tab-focus">
            {{ text }}
            <DropdownIcon />
        </button>
        <div class="header-v2__nav-dropdown header-v2__nav-dropdown--md">
            <ul class="header-v2__nav-list header-v2__nav-list--title-desc">
                <li class="header-v2__nav-item">
                    <a href="#0" class="header-v2__nav-link">
                        <div>
                            <strong>Sub nav item</strong>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                        </div>
                    </a>
                </li>

                <li class="header-v2__nav-item">
                    <a href="#0" class="header-v2__nav-link">
                        <div>
                            <strong>Sub nav item</strong>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                        </div>
                    </a>
                </li>

                <li class="header-v2__nav-item">
                    <a href="#0" class="header-v2__nav-link">
                        <div>
                            <strong>Sub nav item</strong>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                        </div>
                    </a>
                </li>

                <li class="header-v2__nav-item">
                    <a href="#0" class="header-v2__nav-link">
                        <div>
                            <strong>Sub nav item</strong>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
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
import { defineComponent, PropType } from "@vue/composition-api"
import DropdownIcon from "./DropdownIcon.vue"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
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
    components: { DropdownIcon, LinkRepeater },
})
</script>

<style lang="scss" scoped>
@use './style/main-header-v2.scss';
</style>