<template>
  <transition name="slideY">
    <div
      v-if="isActive(mobileMenuKey)"
      ref="menu"
      class="padding-top-xl padding-x-lg"
      style="
        background-color: white;
        position: absolute;
        height: 100vh;
        z-index: 30;
        width: 100%;
        top: 100%;
      "
    >
      <p class="mega-nav__label">
        MENU
      </p>
      <ul>
        <li
          v-for="item in links.filter(
            (g) => g.component.toLowerCase() === 'columndropdown'
          )"
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
      <p class="mega-nav__label">
        OTHER
      </p>
      <ul>
        <li
          v-for="item in links.filter(
            (g) => g.component.toLowerCase() !== 'columndropdown'
          )"
          :key="item.uuid"
          class="mega-nav__item js-mega-nav__item padding-y-sm"
        >
          <component
            :is="item.component"
            class="width-100%"
            v-bind="item"
          />
        </li>
      </ul>
    </div>
  </transition>
</template>

<script lang="ts">
import useToggle from '@/composables/useToggle'
import NavbarDropdown from '@/lib-components/globals/Navbar/Dropdown/NavbarDropdown.vue'
import NavbarDropdownColumns from '@/lib-components/globals/Navbar/Dropdown/NavbarDropdownColumns.vue'
import AppButton from '@/lib-components/elements/AppButton/AppButton.vue'
import AppLink from '@/lib-components/elements/Link/AppLink.vue'
import { defineComponent, PropType } from '@vue/composition-api'
import { mobileMenuKey } from '@/constants'
import { NavbarLink } from '@/types'
import NavbarDropdownColumns1 from '@/lib-components/globals/Navbar/Dropdown/NavbarDropdownColumn1.vue'

export default defineComponent({
  components: { NavbarDropdown, AppButton, AppLink, NavbarDropdownColumns, NavbarDropdownColumns1 },
  setup () {
    const { isActive } = useToggle()
    return {
      isActive,
      mobileMenuKey
    }
  },
  props: {
    links: {
      type: Array as PropType<NavbarLink[]>,
      default: () => []
    }
  }
})
</script>
