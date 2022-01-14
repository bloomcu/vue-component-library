<template>
  <div class="bg-dark">
    <div class="container max-width-lg">
      <div class="subnav  js-subnav">
        <button class="reset btn btn--subtle margin-y-sm subnav__control js-subnav__control">
          <span>Show Categories</span>
          <svg
            class="icon icon--xxs margin-left-xxs"
            aria-hidden="true"
            viewBox="0 0 12 12"
          >
            <polyline
              points="0.5 3.5 6 9.5 11.5 3.5"
              fill="none"
              stroke-width="1"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="subnav__wrapper js-subnav__wrapper">
          <nav class="subnav__nav justify-center">
            <button
              class="reset subnav__close-btn js-subnav__close-btn js-tab-focus"
              aria-label="Close navigation"
            >
              <svg
                class="icon"
                viewBox="0 0 16 16"
              >
                <g
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                >
                  <line
                    x1="13.5"
                    y1="2.5"
                    x2="2.5"
                    y2="13.5"
                  />
                  <line
                    x1="2.5"
                    y1="2.5"
                    x2="13.5"
                    y2="13.5"
                  />
                </g>
              </svg>
            </button>

            <ul class="subnav__list">
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                  aria-current="page"
                >Intro</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Features</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Photos</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Videos</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Specs</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Support</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Compare</a>
              </li>
              <li class="subnav__item">
                <a
                  href="#0"
                  class="subnav__link"
                >Buy</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({

})
</script>

<style lang="scss">
@use '@/styles//base' as *;

/* --------------------------------

File#: _1_sub-navigation
Title: Sub Navigation
Descr: Secondary navigation template
Usage: codyhouse.co/license

-------------------------------- */

.subnav {}

.subnav__nav {
  position: relative;
  display: flex;

  &::after { // shadow overlay indicating scrolling
    content: '';
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(to right, alpha(var(--color-bg-dark), 0), alpha(var(--color-bg-dark), 1));
    pointer-events: none;
  }
}

.subnav__list {
  display: flex;
  overflow: auto;
}

.subnav__item {
  display: inline-block; // fallback
  flex-shrink: 0;
}

.subnav__link {
  display: block;
  font-size: var(--text-sm);
  padding: 1.5625em;
  text-decoration: none;
  color: alpha(var(--color-contrast-high), 0.65);
  border: 3px solid transparent; // border-width
  border-right-width: 0;
  border-left-width: 0;

  transition: .2s;

  &:hover {
    color: var(--color-contrast-high);
  }

  &[aria-current="page"] {
    border-bottom-color: var(--color-primary); // border color
    color: var(--color-contrast-high);
  }
}

// --collapsed
.subnav:not(.subnav--collapsed) {
  .subnav__control, .subnav__close-btn {
    display: none; // hide buttons if nav = expanded
  }
}

.subnav--collapsed {
  display: inline-block;

  .subnav__wrapper {
    position: fixed;
    display: block;
    z-index: var(--z-index-overlay, 15);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: alpha(var(--color-black), 0.9);
    visibility: hidden;
    opacity: 0;
  }

  .subnav__wrapper--is-visible {
    visibility: visible;
    opacity: 1;
    transition: opacity .3s;

    .subnav__nav {
      transform: translateY(0);
      transition: transform .3s;
    }
  }

  .subnav__nav {
    display: block;
    background-color: var(--color-bg);
    box-shadow: var(--shadow-md);
    max-height: 100%;
    overflow: auto;
    transform: translateY(-1em);

    &::after {
      display: none;
    }
  }

  .subnav__list {
    flex-direction: column;
    overflow: visible;
    padding: 0 var(--space-md) var(--space-md);
  }

  .subnav__link {
    border-width: 0;
    font-size: var(--text-md);
    padding: var(--space-xs) 0;

    &[aria-current="page"] {
      color: var(--color-primary);
    }
  }
}

.subnav__close-btn {
  --size: 2em;
  width: var(--size);
  height: var(--size);

  display: flex;
  margin: var(--space-xs) var(--space-xs) 0 auto;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: var(--color-bg-light);
  box-shadow: var(--inner-glow), var(--shadow-sm);

  transition: .2s;

  &:hover {
    background-color: var(--color-bg-lighter);
    box-shadow: var(--inner-glow), var(--shadow-md);
  }

  .icon {
    display: block;
    color: var(--color-contrast-high);
  }
}

// used in JS - detect when the subnav needs to switch from an expanded layout to a collapsed one
[class*="subnav--expanded"]::before {
  display: none;
  content: 'collapsed';
}

@each $breakpoint, $value in $breakpoints {
  @include breakpoint(#{$breakpoint}) {
    .subnav--expanded\@#{$breakpoint}::before {
      content: 'expanded';
    }
  }
}
</style>
