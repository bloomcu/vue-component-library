<template>
  <li class="accordion__item accordion__item js-accordion__item">
    <button
      class="reset accordion__header padding-y-sm padding-x-md js-tab-focus"
      type="button"
    >
      <span class="text-md">{{ accordion.label }}</span>

      <svg
        class="icon accordion__icon-arrow no-js:is-hidden"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <g
          class="icon__group"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line
            x1="10"
            y1="14"
            x2="3"
            y2="7"
          />
          <line
            x1="17"
            y1="7"
            x2="10"
            y2="14"
          />
        </g>
      </svg>
    </button>

    <div
      class="accordion__panel padding-top-xxs padding-x-md padding-bottom-md js-accordion__panel"
    >
      <div
        class="text-component"
        v-html="accordion.content"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { randomId } from '@/helpers'
import { Accordion } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    accordion: {
      type: Object as PropType<Accordion>,
      default: () => ({
        uuid: randomId(),
        label: 'Accordion',
        content: '<p>Hello this is rich text.</p><h1>This is a heading in rich text</h1>'
      })
    }
  }
})
</script>
