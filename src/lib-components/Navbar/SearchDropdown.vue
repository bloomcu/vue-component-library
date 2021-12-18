<template>
    <div>
        <li class="mega-nav__item height-100%">
            <button
                class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus center"
                aria-label="Toggle search"
                aria-controls="mega-nav-search"
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
        <div class="mega-nav__search js-mega-nav__search" id="mega-nav-search">
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
    </div>
</template>

<script lang="ts">
import { GroupItem } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
    props: {
        links: {
            type: Object as PropType<GroupItem>,
            default: () => ({
                title: 'hello world',
                links: []
            })
        }
    }
})
</script>


<style lang="scss">
</style>