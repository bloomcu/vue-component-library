<template>
    <section class="hero-video-bg position-relative padding-y-xxl">
        <div class="container max-width-adaptive-sm">
            <div class="position-relative z-index-2 text-center">
                <ContentComponent
                    center
                    :label="label"
                    :title="title"
                    :subtitle="subtitle"
                    :buttons="buttons"
                />
            </div>
        </div>

        <figure class="hero-video-bg__video" aria-hidden="true">
            <img v-bind="image" />
            <video autoplay loop muted playsinline v-bind="video"></video>
        </figure>
    </section>
</template>

<script lang="ts">
import { useProps } from '@/composables/useProps'
import { Image, Video } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import ContentComponent from '../Content/ContentComponent.vue'

export default defineComponent({
    components: { ContentComponent },
    props: {
        ...useProps().group(['ContentComponent']),
        image: {
            type: Object as PropType<Image>,
            default: () => ({
                src: 'http://placeimg.com/640/480/technics',
                alt: 'img'
            })
        },
        video: {
            type: Object as PropType<Video>,
            default: () => ({
                src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            })
        },
    }
})
</script>

<style lang="scss">
@use '@/styles/base' as *;

/* -------------------------------- 

File#: _3_hero-video-bg
Title: Hero Background Video
Descr: Hero section variation w/ background video
Usage: codyhouse.co/license

-------------------------------- */

.hero-video-bg {
}

.hero-video-bg__video {
    // bg video container
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 1;

    video {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        min-height: 100%;
        min-width: 100%;
        height: auto;
        width: auto;
        max-width: none;

        @supports (object-fit: cover) {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        @supports (object-fit: cover) and (-ms-ime-align: auto) {
            // fix issue on Edge - object-fit not working for video elements
            height: auto;
            width: auto;
        }
    }

    img {
        // video fallback - visible if Reduced Motion is enabled
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        // do not play background video if Reduced Motion is enabled - show fallback image
        video {
            visibility: hidden;
        }

        img {
            display: block;
            position: absolute;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
}

.hero-video-bg__play-btn {
    --btn-size: 80px;
    width: var(--btn-size);
    height: var(--btn-size);
    display: inline-flex;
    background-color: alpha(var(--color-contrast-higher), 0.85);
    border-radius: 50%;
    cursor: pointer;

    transition: background-color 0.3s;

    .icon {
        display: block;
        margin: auto;

        color: var(--color-bg); // icon color
        font-size: 32px; // icon size

        transition: transform 0.3s var(--ease-out-back);
    }

    &:hover {
        background-color: alpha(var(--color-contrast-higher), 1);

        .icon {
            transform: scale(1.2);
        }
    }
}
</style>