<template>
  <header class="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative js-mega-nav">
    <div class="mega-nav__container">
      <!-- 👇 logo -->
      <Link class="mega-nav__logo" :href="logo.link.href">
        <img :src="logo.image.src" />
      </Link>

      <!-- 👇 icon buttons --mobile -->
      <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">
        <a href="#0" class="mega-nav__icon-btn">
          <svg class="icon" viewBox="0 0 24 24">
            <title>Go to account settings</title>
            <g
              class="icon__group"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <circle cx="12" cy="6" r="4" />
              <path d="M12 13a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
            </g>
          </svg>
        </a>

        <button
          class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
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

        <button
          class="reset mega-nav__icon-btn mega-nav__icon-btn--menu js-tab-focus"
          aria-label="Toggle menu"
          aria-controls="mega-nav-navigation"
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
              <path d="M1 6h22" />
              <path d="M1 12h22" />
              <path d="M1 18h22" />
            </g>
          </svg>
        </button>
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
            <li
              v-for="(group, index) in links"
              :key="group.link.text"
              class="mega-nav__item js-mega-nav__item"
            >
              <button class="reset mega-nav__control js-mega-nav__control js-tab-focus">
                {{ group.link.text }}
                <DropdownIcon />
              </button>

              <div class="mega-nav__sub-nav-wrapper">
                <div class="mega-nav__sub-nav" :class="`mega-nav__sub-nav--layout`">
                  <!-- <LinkRepeater :links="group" /> -->
                  <LinkRepeater :links="group.dropdown.links" />
                </div>
              </div>
            </li>

            <!-- 👇 link -->
            <!-- <li class="mega-nav__item">
                            <a href="#0" class="mega-nav__control">Link</a>
            </li>-->
          </ul>

          <ul class="mega-nav__items">
            <!-- 👇 icon buttons --desktop -->
            <li class="mega-nav__icon-btns mega-nav__icon-btns--desktop">
              <div class="dropdown inline-block js-dropdown">
                <div class="mega-nav__icon-btn dropdown__wrapper inline-block">
                  <a
                    href="#0"
                    class="color-inherit flex height-100% width-100% flex-center dropdown__trigger js-dropdown__trigger"
                  >
                    <svg class="icon" viewBox="0 0 24 24">
                      <title>Go to account settings</title>
                      <g
                        class="icon__group"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="square"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="6" r="4" />
                        <path d="M12 13a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
                      </g>
                    </svg>
                  </a>

                  <ul class="dropdown__menu js-dropdown__menu" aria-label="submenu">
                    <li>
                      <a href="#0" class="dropdown__item">Profile</a>
                    </li>
                    <li>
                      <a href="#0" class="dropdown__item">Notifications</a>
                    </li>
                    <li>
                      <a href="#0" class="dropdown__item">Messages</a>
                    </li>
                    <li class="dropdown__separator" role="separator"></li>
                    <li>
                      <a href="#0" class="dropdown__item">Account Settings</a>
                    </li>
                    <li>
                      <a href="#0" class="dropdown__item">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
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

            <!-- 👇 button -->
            <li class="mega-nav__item">
              <CodyButton class="mega-nav__btn" v-bind="button" variant="primary" size="sm"></CodyButton>
            </li>
          </ul>
        </div>
      </div>
      <SearchDropdown v-if="search" />
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent, onMounted, PropType } from "@vue/composition-api"
import navbarScript from "./NavbarScript"
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue"
import DropdownIcon from "./DropdownIcon.vue"
import { GlobalCodyButton, GlobalCtaLink, Logo } from "@/types"
import Link from "../Link/Link.vue"
import CodyButton from "../CodyButton/CodyButton.vue"
import SearchDropdown from "./SearchDropdown.vue"
interface NavbarLink extends GlobalCtaLink {
  link: GlobalCtaLink
  dropdown?: any
}
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
  components: { LinkRepeater, DropdownIcon, Link, CodyButton, SearchDropdown }
})
</script>

<style lang="scss">
@use './style/style.scss';
</style>