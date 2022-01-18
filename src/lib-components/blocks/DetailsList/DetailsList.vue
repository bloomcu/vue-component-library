<template>
  <div class="container max-width-adaptive-lg">
    <dl class="details-list details-list--rows">
      <div
        v-for="(child, i) in children"
        :key="i"
        class="details-list__item padding-y-md"
      >
        <dt class="font-bold margin-bottom-xxs">
          Address
        </dt>
        <dd class="line-height-md">
          <p
            v-for="({ text }, x) in child.children "
            :key="x"
          >
            {{ text }}
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
interface DetailsChild {
  text: string
}
interface Detail {
  title: string
  children: DetailsChild[]
}
export default defineComponent({
  props: {
    children: {
      type: Array as PropType<Detail[]>,
      default: () => (
        [
          {
            title: 'Address',
            children: [
              {
                text: '86 Whitby Road'
              },
              {
                text: 'IP20 6JA'
              },
              {
                text: 'London, UK'
              }
            ]
          },
          {
            title: 'Email',
            children: [
              {
                text: 'hello@myemail.com'
              }
            ]
          },
          {
            title: 'Phone',
            children: [
              {
                text: '+44 7656 6455'
              },
              {
                text: 'Mon - Fri, 9AM - 5PM'
              }
            ]
          }
        ]
      )
    }
  }
})
</script>

<style lang="scss">
@use '@/styles/base' as *;

/* --------------------------------

File#: _1_details-list
Title: Details List
Descr: Pairs of related information displayed in a list
Usage: codyhouse.co/license

-------------------------------- */

:root {
  --details-list-border-width: 1px;
  --details-list-border-opacity: 0.15;
}

.details-list {
}

.details-list--rows {
  .details-list__item {
    border-bottom: var(--details-list-border-width) solid
      alpha(var(--color-contrast-higher), var(--details-list-border-opacity));

    &:last-child {
      border-bottom: none;
    }
  }
}

.details-list--cols {
  .details-list__item {
    border-right: var(--details-list-border-width) solid
      alpha(var(--color-contrast-higher), var(--details-list-border-opacity));

    &:last-child {
      border-right: none;
    }
  }
}

@each $breakpoint, $value in $breakpoints {
  @include breakpoint(#{$breakpoint}) {
    .details-list--rows\@#{$breakpoint} {
      .details-list__item {
        border-right: 0;
        border-bottom: var(--details-list-border-width) solid
          alpha(
            var(--color-contrast-higher),
            var(--details-list-border-opacity)
          );

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .details-list--cols\@#{$breakpoint} {
      .details-list__item {
        border-bottom: 0;
        border-right: var(--details-list-border-width) solid
          alpha(
            var(--color-contrast-higher),
            var(--details-list-border-opacity)
          );

        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
