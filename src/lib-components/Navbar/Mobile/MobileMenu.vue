<template>
    <transition name="slideY">
        <div
            ref="menu"
            class="padding-top-xl padding-x-lg"
            v-if="isActive(mobileMenuKey)"
            style="background-color: white; position: absolute; height: 100vh; z-index: 30; width: 100%; top: 100%"
        >
            <p class="mega-nav__label">MENU</p>
            <ul>
                <li
                    v-for="item in links.filter((g) => g.component.toLowerCase() === 'columndropdown')"
                    :key="item.uuid"
                    class="mega-nav__item js-mega-nav__item"
                >
                <!-- {{ item.dropdown }} -->
                    <component
                        :is="item.component"
                        v-bind="item"
                    />
                </li>
            </ul>
            <p class="mega-nav__label">OTHER</p>
            <ul>
                <li
                    v-for="item in links.filter((g) => g.component.toLowerCase() !== 'columndropdown')"
                    :key="item.uuid"
                    class="mega-nav__item js-mega-nav__item padding-y-sm"
                >
                    <component class="width-100%" :is="item.component" v-bind="item" />
                </li>
            </ul>
        </div>
    </transition>
</template>


<script lang="ts">
import useToggle from "@/composables/useToggle"
import ColumnDropdown from "../ColumnDropdown/ColumnDropdown.vue";
import CodyButton from "@/lib-components/CodyButton/CodyButton.vue";
import CodyLink from '@/lib-components/Link/CodyLink.vue'
import { defineComponent,  PropType } from "@vue/composition-api";
import { mobileMenuKey } from "@/constants";
import { NavbarLink } from "@/types";

export default defineComponent({
    setup() {
        const { isActive } = useToggle();
        return {
            isActive,
            mobileMenuKey
        };
    },
    components: { ColumnDropdown, CodyButton, CodyLink },
    props: {
        links: {
            type: Array as PropType<NavbarLink[]>,
            default: () => []
        }
    }
})
</script>