<template>
  <section class="feature-v9">
    <div class="grid">
      <div
        v-for="(child, i) in children"
        :key="i"
        class="feature-v9__block col-6@md"
        :style="`background-image: url(${child.image.src});`"
      >
        <div class="feature-v9__content text-center max-width-xxxs">
          <div class="text-component">
            <h2 class="text-xxl color-inherit">
              {{ child.title }}
            </h2>
            <p
              class="opacity-90%"
            >
              {{ child.description }}
            </p>
          </div>

          <div class="margin-top-sm">
            <AppButton
              v-for="(button, x) in child.buttons"
              :key="x"
              v-bind="button"
              variant="subtle"
              size="lg"
            />
            <!-- <a class="feature-v9__link" href="#0">Shop Women</a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Content } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import AppButton from '@/lib-components/elements/AppButton/AppButton.vue'
export default defineComponent({
  props: {
    children: {
      type: Array as PropType<Content[]>,
      default: () => ([
        {
          title: 'Title 1',
          description: 'Vero tempora ipsam libero doloribus velit molestiae.',
          buttons: [
            {
              text: 'Shop Women'
              // variant: "accent",
              // size: "xl"
            }
          ],
          image: {
            src: 'https://codyhouse.co/app/assets/img/feature-v9-img-1.jpg'
          }
        },
        {
          title: 'Title 2',
          description: 'Repellat aliquid fugiat quas ea consequatur quia esse. Laudantium cupiditate eos est.',
          buttons: [
            {
              text: 'Shop Men'
              // variant: "accent",
              // size: "xl"
            }
          ],
          image: {
            src: 'https://codyhouse.co/app/assets/img/feature-v9-img-2.jpg'
          }
        }
      ])
    }
  },
  components: { AppButton }
})
</script>

<style lang="scss">
@use '@/styles/base' as *;

/* --------------------------------

File#: _1_feature-v9
Title: Feature v9
Descr: A feature section with 2 blocks
Usage: codyhouse.co/license

-------------------------------- */

.feature-v9 {
    &:hover .feature-v9__block:not(:hover) .feature-v9__content {
        opacity: 0.5;
    }

    &:hover .feature-v9__block:not(:hover)::after {
        background-color: alpha(var(--color-black), 0.8);
        backdrop-filter: grayscale(100%);
    }
}

.feature-v9__block {
    position: relative;
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: var(--space-xl) var(--space-md);
    min-height: 350px;

    &::before,
    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: 0.2s;
    }

    &::before {
        // gradient under the content
        height: 70%;
        background: linear-gradient(
            alpha(var(--color-black), 0),
            alpha(var(--color-black), 0.8)
        );
        mix-blend-mode: multiply;
    }

    &::after {
        // overlay layer
        height: 100%;
        background-color: alpha(var(--color-black), 0);
    }

    &:hover .feature-v9__content {
        transform: translateY(-10px);
    }

    @include breakpoint(sm) {
        min-height: 450px;
    }

    @include breakpoint(md) {
        min-height: 600px;
    }

    @include breakpoint(lg) {
        min-height: 700px;
    }
}

.feature-v9__content {
    position: relative;
    z-index: 2;
    color: var(--color-white);
    @include fontSmooth;
    margin: auto auto 0;
    transition: 0.2s;
}

.feature-v9__link {
    color: var(--color-black);
    text-decoration: none;
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background-color: alpha(var(--color-white), 0.8);
    border-radius: var(--radius-md);
    backdrop-filter: blur(5px);
    transition: background-color 0.2s;

    &:hover {
        background-color: alpha(var(--color-white), 1);
    }
}
</style>
