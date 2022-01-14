<template>
  <div
    ref="dropdown"
    class="cody-searchdropdown margin-right-sm"
  >
    <!-- Rewrite in Vue -->
    <li class="mega-nav__item height-100% list-style-none">
      <button
        class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus center"
        aria-label="Toggle search"
        @click="(dropdownOpen = !dropdownOpen), close(mobileMenuKey)"
      >
        <svg
          class="icon"
          viewBox="0 0 24 24"
        >
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
            <circle
              cx="9.5"
              cy="9.5"
              r="6.5"
            />
          </g>
        </svg>
      </button>
    </li>
    <!-- 👇 search -->
    <transition name="slideY">
      <div
        v-if="dropdownOpen"
        class="mega-nav__search"
      >
        <div class="mega-nav__search-inner">
          <Search
            id="megasite-search"
            name="megasite-search"
            placeholder="Search..."
            aria-label="Search"
          />
          <div class="margin-top-lg">
            <p class="mega-nav__label">
              Quick Links
            </p>
            <ul>
              <li
                v-for="link of children"
                :key="link.text"
              >
                <a
                  :href="link.href"
                  class="mega-nav__quick-link"
                >{{
                  link.text
                }}</a>
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
import useToggle from '@/composables/useToggle'
import { mobileMenuKey } from '@/constants'
import { randomId } from '@/helpers'
import { Link } from '@/types'
import {
  defineComponent,
  PropType,
  ref
} from '@vue/composition-api'
import Search from '../Search/Search.vue'

export default defineComponent({
  props: {
    children: {
      type: Array as PropType<Link[]>,
      default: () => []
    },
    uuid: {
      type: String,
      default: randomId()
    }
  },
  setup () {
    const dropdownOpen = ref(false)
    const dropdown = ref(null)
    const { close } = useToggle()
    useClickOutside(dropdown, () => {
      dropdownOpen.value = false
    })

    return {
      dropdownOpen,
      dropdown,
      close,
      mobileMenuKey
    }
  },
  components: { Search }
})
</script>

<style lang="scss">
.cody-searchdropdown {
  .mega-nav__search,
  .mega-nav--desktop .mega-nav__search {
    display: block;
  }
}
.slideY-enter-active,
.slideY-leave-active {
  transition: 0.2s;
}
.slideY-enter, .slideY-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
