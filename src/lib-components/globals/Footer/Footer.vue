<template>
  <footer class="main-footer position-relative z-index-1 padding-top-xl">
    <div class="container max-width-lg">
      <div class="grid gap-lg">
        <div class="col-3@lg order-2@lg text-right@lg">
          <AppLink
            class="main-footer__logo"
            :href="logo.link.href"
          >
            <img :src="logo.image.src">
          </AppLink>
        </div>

        <nav class="col-9@lg order-1@lg">
          <LinkRepeater :links="primaryLinks" />
        </nav>
      </div>

      <div
        class="flex flex-column border-top padding-y-xs margin-top-lg flex-row@md justify-between@md items-center@md"
      >
        <div class="margin-bottom-sm margin-bottom-0@md">
          <div
            class="text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs"
          >
            <span>&copy; {{ organization }} {{ new Date().getFullYear() }}</span>
            <AppLink
              v-for="link in secondaryLinks"
              :key="link.href"
              :href="link.href"
              :title="link.text"
              :target="link.target"
              class="color-contrast-high"
            >
              {{ link.text }}
            </AppLink>
          </div>
        </div>

        <div class="flex items-center gap-xs">
          <Social
            v-for="social in socials"
            :key="social.name"
            :social="social"
            class="main-footer__social"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Link, Child, Logo } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import AppLink from '@/lib-components/elements/Link/AppLink.vue'
import Social from '@/lib-components/blocks/Socials/Social.vue'
import LinkRepeater from '@/lib-components/blocks/LinkRepeater/LinkRepeater.vue'

interface SocialNames {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
}
interface SocialLink extends Link {
  name?: keyof SocialNames;
  socialName?: keyof SocialNames;
}

export default defineComponent({
  props: {
    organization: {
      type: String,
      default: 'Website'
    },
    socials: {
      type: Array as PropType<SocialLink[]>,
      default: () => []
    },
    logo: {
      type: Object as PropType<Logo>,
      default: () => ({
        image: {
          src: 'http://placeimg.com/150/32/abstract'
        },
        link: {
          href: '#'
        }
      })
    },
    primaryLinks: {
      type: Array as PropType<Child[]>,
      default: () => []
    },
    secondaryLinks: {
      type: Array as PropType<Link[]>,
      default: () => []
    },
    terms: {
      type: Object as PropType<Link>,
      default: () => ({})
    },
    privacy: {
      type: Object as PropType<Link>,
      default: () => ({})
    }
  },
  components: { AppLink, Social, LinkRepeater }
})
</script>

<style lang="scss" scoped>
@use '@/styles/base' as *;

/* --------------------------------

File#: _1_main-footer
Title: Main Footer
Descr: Footer navigation
Usage: codyhouse.co/license

-------------------------------- */

.main-footer {
}

.main-footer__logo {
  display: inline-block;

  svg,
  img {
    display: block;
  }
}

.main-footer__social {
  text-decoration: none;
  display: inline-block;
  color: var(--color-contrast-medium);

  &:hover {
    color: var(--color-contrast-high);
  }

  .icon {
    font-size: 1.2em; // icon size
  }

  @include breakpoint(md) {
    .icon {
      font-size: 1em;
    }
  }
}
</style>
