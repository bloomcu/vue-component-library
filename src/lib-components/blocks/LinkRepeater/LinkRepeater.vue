<template>
  <!-- TODO: make this use the grid component -->
  <ul class="grid gap-lg">
    <li
      v-for="group in links"
      :key="group.title"
      class="col-6@xs col-3@md"
    >
      <h4 class="margin-bottom-sm text-base@md">
        {{ group.title }}
      </h4>
      <ul class="grid gap-xs text-sm@md">
        <li
          v-for="link in group.links"
          :key="link.text"
        >
          <a
            :key="link.href"
            link
            :href="link.href"
            :title="link.text"
            :target="link.target"
            class="link-repeater__link"
          >{{ link.text }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { Child } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array as PropType<Child[]>,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.link-repeater__link {
  color: var(--color-contrast-medium);
  text-decoration: none;

  &:hover {
    color: var(--color-contrast-high);
    text-decoration: underline;
  }
}
</style>
