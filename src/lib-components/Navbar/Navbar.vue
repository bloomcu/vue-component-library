<template>
  <header class="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative js-mega-nav">
    <MobileMenu :links="getMobileDropdownItems" />
    <div class="mega-nav__container">
      <!-- 👇 logo -->
      <Link
        class="mega-nav__logo"
        :href="logo.link.href"
      >
        <img :src="logo.image.src">
      </Link>

      <!-- 👇 icon buttons --mobile -->
      <!-- TODO add window resizer if needed -->
      <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">
        <!-- <SearchDropdown uuid="mobile" v-if="search" /> -->
        <component
          :is="group.component"
          v-for="(group, i) in getMobileMenuItems"
          :key="i"
          v-bind="group"
        />
        <!-- <div v-for="group in getMobileMenuItems" :key="group.text">
        </div>-->
        <CodyHamburger />
        <!-- <MobileHamburger /> -->
      </div>

      <div
        id="mega-nav-navigation"
        class="mega-nav__nav js-mega-nav__nav"
        role="navigation"
        aria-label="Main"
      >
        <div class="mega-nav__nav-inner">
          <!-- Left side -->
          <ul class="mega-nav__items">
            <li class="mega-nav__label">
              Menu
            </li>

            <!-- 👇 layout 2 -> multiple lists -->
            <li
              v-for="group in primaryLinks"
              :key="group.uuid"
              class="mega-nav__item js-mega-nav__item"
            >
              <!-- {{group}} -->
              <component
                :is="group.component"
                v-bind="group"
              />
            </li>
          </ul>
          <!-- Right side -->
          <ul class="mega-nav__items">
            <li
              v-for="group in secondaryLinks"
              :key="group.uuid"
              class="mega-nav__item js-mega-nav__item"
            >
              <component
                :is="group.component"
                v-bind="group"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- <SearchDropdown v-if="search" /> -->
    </div>
  </header>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType
} from '@vue/composition-api'
import navbarScript from './NavbarScript'
import LinkRepeater from '../LinkRepeater/LinkRepeater.vue'
import DropdownIcon from './DropdownIcon.vue'
import { Button, Logo, NavbarLink as NavbarLinkType } from '@/types'
import Link from '../Link/Link.vue'
import AppLink from '../Link/AppLink.vue'
import AppButton from '../AppButton/AppButton.vue'
import SearchDropdown from './SearchDropdown.vue'
import ColumnDropdown from './ColumnDropdown/ColumnDropdown.vue'
import Dropdown from './Dropdown.vue'
import MobileHamburger from './MobileHamburger.vue'
import CodyHamburger from './CodyHamburger.vue'
import MobileMenu from './Mobile/MobileMenu.vue'
import NavbarDropdown from './Dropdown/NavbarDropdown.vue'
import NavbarLink from './NavbarLink.vue'
export default defineComponent({
  components: {
    LinkRepeater,
    DropdownIcon,
    Link,
    AppButton,
    SearchDropdown,
    ColumnDropdown,
    Dropdown,
    MobileHamburger,
    CodyHamburger,
    MobileMenu,
    AppLink,
    NavbarDropdown,
    NavbarLink
  },
  props: {
    search: {
      type: Boolean,
      default: true
    },
    primaryLinks: {
      type: Array as PropType<NavbarLinkType[]>,
      default: () => []
    },
    secondaryLinks: {
      type: Array as PropType<NavbarLinkType[]>,
      default: () => []
    },
    logo: {
      type: Object as PropType<Logo>,
      default: () => ({
        image: {
          src: 'https://via.placeholder.com/200x100'
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
  setup (props) {
    onMounted(() => {
      navbarScript()
    })
    const mobileDropdownItemKeys = [
      'ColumnDropdown',
      'Link',
      'AppLink',
      'Button',
      'AppButton'
    ]
    const getMobileMenuItems = computed(() => {
      const mergeLinks = [...props.primaryLinks, ...props.secondaryLinks]
      return mergeLinks.filter(
        (l) =>
          !mobileDropdownItemKeys
            .map((m) => m.toLowerCase())
            .includes(l.component?.toLowerCase())
      )
    })
    const getMobileDropdownItems = computed(() => {
      const mergeLinks = [...props.primaryLinks, ...props.secondaryLinks]
      // console.log(`mergeLinks`, mergeLinks)
      return mergeLinks.filter((l) =>
        mobileDropdownItemKeys
          .map((m) => m.toLowerCase())
          .includes(l.component?.toLowerCase())
      )
    })

    return {
      getMobileMenuItems,
      getMobileDropdownItems
    }
  }
})
</script>

<style lang="scss">
@use './style/style.scss';
</style>
