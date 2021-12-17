<template>
    <footer class="main-footer position-relative z-index-1 padding-top-xl">
        <div class="container max-width-lg">
            <div class="grid gap-lg">
                <div class="col-3@lg order-2@lg text-right@lg">
                    <CodyImage :image="logo" />
                </div>

                <nav class="col-9@lg order-1@lg">
                    <ul class="grid gap-lg">
                        <li
                            v-for="group in primaryLinks"
                            :key="group.title"
                            class="col-6@xs col-3@md"
                        >
                            <h4 class="margin-bottom-sm text-base@md">{{ group.title }}</h4>
                            <ul class="grid gap-xs text-sm@md">
                                <li v-for="link in group.links">
                                    <a
                                        link
                                        :href="link.href"
                                        :title="link.text"
                                        :target="link.target"
                                        :key="link.href"
                                        class="main-footer__link"
                                    >{{ link.text }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div
                class="flex flex-column border-top padding-y-xs margin-top-lg flex-row@md justify-between@md items-center@md"
            >
                <div class="margin-bottom-sm margin-bottom-0@md">
                    <div class="text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs">
                        <span>&copy; {{ websiteName }}</span>
                        <Link
                            v-for="link in secondaryLinks"
                            :href="link.href"
                            :title="link.text"
                            :target="link.target"
                            :key="link.href"
                            class="color-contrast-high"
                        >{{ link.text }}</Link>
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
import { GlobalCtaLink, GlobalImage } from "@/types";
import { defineComponent, PropType } from "@vue/composition-api";
import CodyImage from "../CodyImage/CodyImage.vue";
import Link from "../Link/Link.vue";
import Social from "../Socials/Social.vue";

interface GroupItem {
    title: string
    links: GlobalCtaLink[]
}
interface SocialNames {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
}
interface Social extends GlobalCtaLink {
    name?: keyof (SocialNames)
}
interface Logo extends GlobalImage {
    href?: string
}
export default defineComponent({
    props: {
        websiteName: {
            type: String,
            default: "Website"
        },
        socials: {
            type: Array as PropType<Social[]>,
            default: () => []
        },
        logo: {
            type: Object as PropType<Logo>,
            default: () => ({
                src: "http://placeimg.com/150/32/abstract",
            })
        },
        primaryLinks: {
            type: Array as PropType<GroupItem[]>,
            default: () => []
        },
        secondaryLinks: {
            type: Array as PropType<GlobalCtaLink[]>,
            default: () => []
        },
        terms: {
            type: Object as PropType<GlobalCtaLink>,
            default: () => ({})
        },
        privacy: {
            type: Object as PropType<GlobalCtaLink>,
            default: () => ({})
        },
    },
    components: { CodyImage, Link, Social }
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

.main-footer__link {
    color: var(--color-contrast-medium);
    text-decoration: none;

    &:hover {
        color: var(--color-contrast-high);
        text-decoration: underline;
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