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
                    v-for="group in links.filter((g) => g.component.toLowerCase() === 'columndropdown')"
                    :key="group.uuid"
                    :class="{
                        'padding-y-sm': group.component.toLowerCase() !== 'columndropdown'
                    }"
                    class="mega-nav__item js-mega-nav__item"
                >
                    <component
                        :class="{
                            'width-100%': group.component.toLowerCase() !== 'columndropdown'
                        }"
                        :is="group.component"
                        v-bind="group"
                    />
                </li>
            </ul>
            <p class="mega-nav__label">OTHER</p>
            <ul>
                <li
                    v-for="group in links.filter((g) => g.component.toLowerCase() !== 'columndropdown')"
                    :key="group.uuid"
                    class="mega-nav__item js-mega-nav__item padding-y-sm"
                >
                    <component class="width-100%" :is="group.component" v-bind="group" />
                </li>
            </ul>
        </div>
    </transition>
</template>


<script lang="ts">
import useToggle from "@/composables/useToggle"
import ColumnDropdown from "../ColumnDropdown.vue";
import CodyButton from "@/lib-components/CodyButton/CodyButton.vue";
import { defineComponent,  PropType } from "@vue/composition-api";
import { mobileMenuKey } from "@/constants";

export default defineComponent({
    setup() {
        const { isActive } = useToggle();
        return {
            isActive,
            mobileMenuKey
        };
    },
    components: { ColumnDropdown, CodyButton },
    props: {
        links: {
            type: Array as PropType<any>,
            default: () => []
        }
    }
})
</script>