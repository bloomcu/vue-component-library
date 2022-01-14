<template>
  <div ref="dropdownEl" class="height-100%">
    <NavbarDropdownToggleButton :text="text" @click="() => (open = !open)" />
    <!-- <ColumnFullWidthDropdown :children="children" /> -->
    <component
      :is="dropdown.component"
      :open="open"
      :children="dropdown.children"
    />
  </div>
</template>

<script lang="ts">
import { Dropdown, Child } from '@/types';
import { defineComponent, PropType, ref } from '@vue/composition-api';
import DropdownIcon from '../DropdownIcon.vue';
import LinkRepeater from '../../LinkRepeater/LinkRepeater.vue';
import ColumnDropdown1 from './ColumnDropdown1.vue';
import useClickOutside from '@/composables/useClickOutside';
import NavbarDropdownToggleButton from './NavbarDropdownToggleButton.vue';
import ColumnFullWidthDropdown from '../ColumnDropdown/ColumnFullWidthDropdown.vue';
export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    children: {
      type: Array as PropType<Child[]>,
      default: () => [],
    },
    dropdown: {
      type: Object as PropType<Dropdown>,
      default: () => ({}),
    },
  },
  components: {
    DropdownIcon,
    LinkRepeater,
    ColumnDropdown1,
    NavbarDropdownToggleButton,
    ColumnFullWidthDropdown,
  },
  setup() {
    const open = ref(false);
    const dropdownEl = ref(null);
    useClickOutside(dropdownEl, () => {
      if (open.value) {
        open.value = false;
      }
    });
    return {
      open,
      dropdownEl,
    };
  },
});
</script>
