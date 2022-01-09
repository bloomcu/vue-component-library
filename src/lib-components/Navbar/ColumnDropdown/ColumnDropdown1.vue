<template>
  <transition name="slideY">
    <div ref="dropdown" v-if="open" class="position-relative">
      <div class="header-v2__nav-dropdown header-v2__nav-dropdown--md">
        <ul class="header-v2__nav-list header-v2__nav-list--title-desc">
          <li
            v-for="child in children"
            :key="child.title"
            class="header-v2__nav-item"
          >
            <a href="#0" class="header-v2__nav-link">
              <div>
                <strong>{{ child.title }}</strong>
                <small>{{ child.text }}</small>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Child } from '@/types';
import { defineComponent, PropType } from '@vue/composition-api';
export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    children: {
      type: Array as PropType<Child[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@use '../style/main-header-v2.scss';
</style>
