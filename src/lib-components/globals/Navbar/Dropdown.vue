<template>
  <!-- 👇 icon buttons --desktop -->
  <div
    ref="dropdown"
    class="mega-nav__item list-style-none"
  >
    <div class="position-relative inline-block cody-dropdown">
      <div
        class="mega-nav__icon-btn inline-block"
        :class="
          dropdownOpen
            ? 'mega-nav__icon-btn--active'
            : 'mega-nav__icon-btn--inactive'
        "
      >
        <a
          href="#0"
          :class="dropdownOpen ? 'cody-dropdown__trigger--active' : ''"
          class="color-inherit flex height-100% width-100% flex-center cody-dropdown__trigger"
          @click.prevent="(dropdownOpen = !dropdownOpen), close(mobileMenuKey)"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
            <title>{{ title }}</title>
            <g
              class="icon__group"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <circle
                cx="12"
                cy="6"
                r="4"
              />
              <path d="M12 13a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
            </g>
          </svg>
        </a>

        <ul
          class="dropdown__menu"
          :class="{
            'opacity-100': dropdownOpen,
          }"
          aria-label="submenu"
        >
          <li
            v-for="child in children"
            :key="child.text"
          >
            <a
              :href="child.href"
              class="dropdown__item"
            >{{ child.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useClickOutside from '@/composables/useClickOutside'
import { Link } from '@/types'
import {
  defineComponent,
  onMounted,
  PropType,
  ref
} from '@vue/composition-api'
import { mobileMenuKey } from '@/constants'
import useToggle from '@/composables/useToggle'
export default defineComponent({
  props: {
    children: {
      type: Array as PropType<Link[]>,
      default: () => []
    },
    title: {
      type: String,
      default: 'Go to account settings'
    }
  },
  setup () {
    const dropdownOpen = ref(false)
    const dropdown = ref(null)
    useClickOutside(dropdown, () => {
      dropdownOpen.value = false
    })
    onMounted(() => {})
    const { close } = useToggle()
    return {
      dropdownOpen,
      dropdown,
      mobileMenuKey,
      close
    }
  }
})
</script>
<style lang="scss">
@mixin dropdownActiveBg() {
  background-color: hsla(
    var(--color-contrast-higher-h),
    var(--color-contrast-higher-s),
    var(--color-contrast-higher-l),
    0.05
  );
}
.mega-nav__item {
  .cody-dropdown {
    .cody-dropdown__trigger {
      border-radius: 50%;
      transition: background-color 0.2s;
      &:hover {
        @include dropdownActiveBg();
      }
    }
    .cody-dropdown__trigger--active {
      @include dropdownActiveBg();
    }
    .opacity-100 {
      opacity: 1;
    }
    .mega-nav__icon-btn--inactive {
      li {
        pointer-events: none;
      }
    }
    .mega-nav__icon-btn {
      cursor: initial;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
