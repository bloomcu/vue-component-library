<template>
    <transition name="slideY">
        <div
            class="padding-top-xl padding-x-lg"
            v-if="isActive('mobileMenu')"
            style="background-color: white; position: absolute; height: 100vh; z-index: 30; width: 100%; top: 100%"
        >
            <p class="mega-nav__label">MENU</p>
            <ul class="margin-top-md">drop own items</ul>
        </div>
    </transition>
</template>


<script lang="ts">
import useToggle from "@/composables/useToggle"

export default {
    setup() {
        const { isActive } = useToggle();
        return {
            isActive
        };
    },
}
</script>