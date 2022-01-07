<template>
    <transition name="slideY">
        <div ref="dropdown" v-if="open" class="position-relative">
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
        </div>
    </transition>
</template>


<script lang="ts">
import useClickOutside from "@/composables/useClickOutside"
import { defineComponent, ref } from "@vue/composition-api"
export default defineComponent({
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },
    setup(_, { emit }) {
        const dropdown = ref(null)
        useClickOutside(dropdown, () => emit('toggleDropdown'))
        return {
            dropdown
        }
    }
})
</script>

<style lang="scss" scoped>
@use './style/main-header-v2.scss';
</style>