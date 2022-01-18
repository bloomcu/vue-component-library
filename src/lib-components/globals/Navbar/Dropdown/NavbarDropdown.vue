<template>
  <div
    ref="dropdownEl"
    class="height-100%"
  >
    <NavbarDropdownToggleButton
      :text="text"
      @click="() => (open = !open)"
    />
    <!-- <NavbarDropdownColumns :children="children" /> -->
    <component
      :is="dropdown.component"
      :open="open"
      :children="dropdown.children"
    />
  </div>
</template>

<script lang="ts">
import { Dropdown, Child } from '@/types'
import { defineComponent, PropType, ref } from '@vue/composition-api'
import DropdownIcon from '../DropdownIcon.vue'
import LinkRepeater from '@/lib-components/blocks/LinkRepeater/LinkRepeater.vue'
import useClickOutside from '@/composables/useClickOutside'
import NavbarDropdownToggleButton from './NavbarDropdownToggleButton.vue'
import NavbarDropdownColumns from './NavbarDropdownColumns.vue'
import NavbarDropdownColumn1 from './NavbarDropdownColumn1.vue'
export default defineComponent({
  components: {
    DropdownIcon,
    LinkRepeater,
    NavbarDropdownToggleButton,
    NavbarDropdownColumns,
    NavbarDropdownColumn1
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    children: {
      type: Array as PropType<Child[]>,
      default: () => []
    },
    dropdown: {
      type: Object as PropType<Dropdown>,
      default: () => ({})
    }
  },
  setup () {
    const open = ref(false)
    const dropdownEl = ref(null)
    useClickOutside(dropdownEl, () => {
      if (open.value) {
        open.value = false
      }
    })
    return {
      open,
      dropdownEl
    }
  }
})
</script>
