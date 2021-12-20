<template>
  <header class="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative js-mega-nav">
    <div class="mega-nav__container">
      <!-- 👇 logo -->
      <Link class="mega-nav__logo" :href="logo.link.href">
        <img :src="logo.image.src" />
      </Link>

      <!-- 👇 icon buttons --mobile -->
      <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">
        <Dropdown />
        <SearchDropdown uuid="mobile" v-if="search" />
        <MobileHamburger />
      </div>

      <div
        class="mega-nav__nav js-mega-nav__nav"
        id="mega-nav-navigation"
        role="navigation"
        aria-label="Main"
      >
        <div class="mega-nav__nav-inner">
          <ul class="mega-nav__items">
            <li class="mega-nav__label">Menu</li>

            <!-- 👇 layout 2 -> multiple lists -->
            <li v-for="group in links" :key="group.uuid" class="mega-nav__item js-mega-nav__item">
              <NavbarComponent :group="group" />
            </li>
          </ul>

          <ul class="mega-nav__items">
            <SearchDropdown uuid="desktop" v-if="search" />
            <Dropdown />

            <!-- 👇 button -->
            <li class="mega-nav__item">
              <CodyButton class="mega-nav__btn" v-bind="button" variant="primary" size="sm"></CodyButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- <SearchDropdown v-if="search" /> -->
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent, onMounted, PropType } from "@vue/composition-api"
import navbarScript from "./NavbarScript"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
import DropdownIcon from "./DropdownIcon.vue"
import { GlobalCodyButton, Logo, NavbarLink } from "@/types"
import Link from "../Link/Link.vue"
import CodyButton from "../CodyButton/CodyButton.vue"
import SearchDropdown from "./SearchDropdown.vue"
import ColumnDropdown from "./ColumnDropdown.vue"
import Dropdown from "./Dropdown.vue"
import MobileHamburger from "./MobileHamburger.vue"
import NavbarComponent from "./NavbarComponent.vue"

export default defineComponent({
  props: {
    search: {
      type: Boolean,
      default: true,
    },
    links: {
      type: Array as PropType<NavbarLink[]>,
      default: () => []
    },
    logo: {
      type: Object as PropType<Logo>,
      default: () => ({
        image: {
          src: "http://placeimg.com/150/32/abstract",
        },
        link: {
          href: '#'
        }
      })
    },
    button: {
      type: Object as PropType<GlobalCodyButton>,
      default: () => ({
        text: 'Download'
      })
    }
  },
  setup() {
    onMounted(() => {
      navbarScript()

    })

    return {
    }
  },
  components: { LinkRepeater, DropdownIcon, Link, CodyButton, SearchDropdown, ColumnDropdown, Dropdown, MobileHamburger, NavbarComponent }
})
</script>

<style lang="scss">
@use './style/style.scss';
</style>