<template>
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