<template>
    <div ref="dropdown" class="cody-searchdropdown">
        <!-- Rewrite in Vue -->
        <li class="mega-nav__item height-100% list-style-none">
            <button
            @click="dropdownOpen = !dropdownOpen"
                class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus center"
                aria-label="Toggle search"
            >
                <svg class="icon" viewBox="0 0 24 24">
                    <g
                        class="icon__group"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="square"
                        stroke-miterlimit="10"
                        stroke-width="2"
                    >
                        <path d="M4.222 4.222l15.556 15.556" />
                        <path d="M19.778 4.222L4.222 19.778" />
                        <circle cx="9.5" cy="9.5" r="6.5" />
                    </g>
                </svg>
            </button>
        </li>
        <!-- 👇 search -->
        <transition name="slideY">
            <div v-if="dropdownOpen" class="mega-nav__search">
                <div class="mega-nav__search-inner">
                    <input
                        class="form-control width-100%"
                        type="reset search"
                        name="megasite-search"
                        id="megasite-search"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                    <div class="margin-top-lg">
                        <p class="mega-nav__label">Quick Links</p>
                        <ul>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Find a Store</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Your Orders</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Documentation</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Questions &amp; Answers</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import useClickOutside from '@/composables/useClickOutside'
import { randomId } from '@/helpers'
import { GroupItem } from '@/types'
import { defineComponent, PropType, ref, onMounted } from '@vue/composition-api'

export default defineComponent({
    props: {
        links: {
            type: Object as PropType<GroupItem>,
            default: () => ({
                title: "hello world",
                links: []
            })
        },
        uuid: {
            type: String,
            default: randomId()
        }
    },
    setup() {
        const dropdownOpen = ref(false)
        const dropdown = ref(null)
        onMounted(() => {
            useClickOutside(dropdown.value, (val) => {
                if (val) dropdownOpen.value = false
            })
        })
        return {
            dropdownOpen,
            dropdown
        }
    }
})
</script>


<style lang="scss">
.cody-searchdropdown {
    .mega-nav__search, .mega-nav--desktop .mega-nav__search {
        display: block;
    }
}
.slideY-enter-active,
.slideY-leave-active {
    transition: 0.2s;
}
.slideY-enter, .slideY-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-15px)
}
</style>