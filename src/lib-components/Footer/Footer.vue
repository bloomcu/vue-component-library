<template>
    <footer class="main-footer position-relative z-index-1 padding-top-xl">
        <div class="container max-width-lg">
            <div class="grid gap-lg">
                <div class="col-3@lg order-2@lg text-right@lg">
                    <Link class="main-footer__logo" :href="logo.link.href">
                        <img :src="logo.image.src">
                    </Link>
                </div>

                <nav class="col-9@lg order-1@lg">
                   <LinkRepeater :links="primaryLinks" />
                </nav>
            </div>

            <div
                class="flex flex-column border-top padding-y-xs margin-top-lg flex-row@md justify-between@md items-center@md"
            >
                <div class="margin-bottom-sm margin-bottom-0@md">
                    <div class="text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs">
                        <span>&copy; {{ organization }} {{ new Date().getFullYear() }}</span>
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
import { Link, Child, Logo } from "@/types";
import { defineComponent, PropType } from "@vue/composition-api";
import CodyImage from "../CodyImage/CodyImage.vue";
import Link from "../Link/Link.vue";
import Social from "../Socials/Social.vue";
import LinkRepeater from "../LinkRepeater/LinkRepeater.vue";


interface SocialNames {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
}
interface Social extends Link {
    name?: keyof (SocialNames)
    socialName?: keyof (SocialNames)
}

export default defineComponent({
    props: {
        organization: {
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
                image: {
                    src: "http://placeimg.com/150/32/abstract",
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
        },
    },
    components: { CodyImage, Link, Social, LinkRepeater }
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