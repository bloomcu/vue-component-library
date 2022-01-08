<template>
  <header class="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative js-mega-nav">
    <MobileMenu :links="getMobileDropdownItems" />
    <div class="mega-nav__container">
      <!-- 👇 logo -->
      <Link class="mega-nav__logo" :href="logo.link.href">
        <img :src="logo.image.src" />
      </Link>

      <!-- 👇 icon buttons --mobile -->
      <!-- TODO add window resizer if needed -->
      <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">
   
        <!-- <SearchDropdown uuid="mobile" v-if="search" /> -->
          <component v-for="(group, i) in getMobileMenuItems" :key="i" :is="group.component" v-bind="group" />
        <!-- <div v-for="group in getMobileMenuItems" :key="group.text">
        </div> -->
        <CodyHamburger />
        <!-- <MobileHamburger /> -->
      </div>

      <div
        class="mega-nav__nav js-mega-nav__nav"
        id="mega-nav-navigation"
        role="navigation"
        aria-label="Main"
      >
        <div class="mega-nav__nav-inner">
          <!-- Left side -->
          <ul class="mega-nav__items">
            <li class="mega-nav__label">Menu</li>

            <!-- 👇 layout 2 -> multiple lists -->
            <li v-for="group in primaryLinks" :key="group.uuid" class="mega-nav__item js-mega-nav__item">
              <!-- {{group}} -->
              <component :is="group.component" v-bind="group" />
            </li>
          </ul>
          <!-- Right side -->
          <ul class="mega-nav__items">
            <li
              class="mega-nav__item js-mega-nav__item"
              v-for="group in secondaryLinks"
              :key="group.uuid"
            >
              <component :is="group.component" v-bind="group" />
            </li>
          </ul>
        </div>
      </div>
      <!-- <SearchDropdown v-if="search" /> -->
    </div>
  </header>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted, PropType } from "@vue/composition-api"
import navbarScript from "./NavbarScript"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
import DropdownIcon from "./DropdownIcon.vue"
import { Button, Logo, NavbarLink } from "@/types"
import Link from "../Link/Link.vue"
import CodyLink from "../Link/CodyLink.vue"
import CodyButton from "../CodyButton/CodyButton.vue"
import SearchDropdown from "./SearchDropdown.vue"
import ColumnDropdown from "./ColumnDropdown/ColumnDropdown.vue"
import Dropdown from "./Dropdown.vue"
import MobileHamburger from "./MobileHamburger.vue"
import CodyHamburger from "./CodyHamburger.vue"
import MobileMenu from "./Mobile/MobileMenu.vue"

export default defineComponent({
  props: {
    search: {
      type: Boolean,
      default: true,
    },
    primaryLinks: {
      type: Array as PropType<NavbarLink[]>,
      default: () => []
    },
    secondaryLinks: {
      type: Array as PropType<NavbarLink[]>,
      default: () => []
    },
    logo: {
      type: Object as PropType<Logo>,
      default: () => ({
        image: {
          src: "https://via.placeholder.com/200x100",
        },
        link: {
          href: '#'
        }
      })
    },
    button: {
      type: Object as PropType<Button>,
      default: () => ({
        text: 'Download'
      })
    }
  },
  setup(props) {
    onMounted(() => {
      navbarScript()

    })
    const mobileDropdownItemKeys = ['ColumnDropdown', 'Link', 'CodyLink', 'Button', 'CodyButton']
    const getMobileMenuItems = computed(() => {
      const mergeLinks = [...props.primaryLinks, ...props.secondaryLinks]
      return mergeLinks.filter((l) => !mobileDropdownItemKeys.map((m) => m.toLowerCase()).includes(l.component?.toLowerCase()))

    })
    const getMobileDropdownItems = computed(() => {
      const mergeLinks = [...props.primaryLinks, ...props.secondaryLinks]
      // console.log(`mergeLinks`, mergeLinks)
      return mergeLinks.filter((l) => mobileDropdownItemKeys.map((m) => m.toLowerCase()).includes(l.component?.toLowerCase()))
    })

    return {
      getMobileMenuItems,
      getMobileDropdownItems
    }
  },
  components: { LinkRepeater, DropdownIcon, Link, CodyButton, SearchDropdown, ColumnDropdown, Dropdown, MobileHamburger, CodyHamburger, MobileMenu, CodyLink }
})
</script>

<style lang="scss">
@use './style/style.scss';
</style>