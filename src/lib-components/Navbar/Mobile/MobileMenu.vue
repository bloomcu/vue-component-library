<template>
    <transition name="slideY">
        <div
            class="padding-top-xl padding-x-lg"
            v-if="isActive('mobileMenu')"
            style="background-color: white; position: absolute; height: 100vh; z-index: 30; width: 100%; top: 100%"
        >
            <p class="mega-nav__label">MENU</p>
            <ul>
                <li v-for="group in links.filter((g) => g.component.toLowerCase() === 'columndropdown')" :key="group.uuid" :class="{
                        'padding-y-sm': group.component.toLowerCase() !== 'columndropdown'
                    }" class="mega-nav__item js-mega-nav__item">
                    <component :class="{
                        'width-100%': group.component.toLowerCase() !== 'columndropdown'
                    }"  :is="group.component" v-bind="group" />
                </li>
            </ul>
            <p class="mega-nav__label">OTHER</p>
            <ul>
                <li v-for="group in links.filter((g) => g.component.toLowerCase() !== 'columndropdown')" :key="group.uuid" class="mega-nav__item js-mega-nav__item padding-y-sm">
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

export default {
    setup() {
        const { isActive } = useToggle();
        return {
            isActive
        };
    },
    components: { ColumnDropdown, CodyButton },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    }
}
</script>