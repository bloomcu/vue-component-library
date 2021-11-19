// Usage examples
// v-if="isActive('lkjasf234-2jkl24j5-2-45lkjn')"
// @close="toggle('lkjasf234-2jkl24j5-2-45lkjn')"
// @open="toggle('lkjasf234-2jkl24j5-2-45lkjn')"

import { ref, computed } from "@vue/composition-api";

export default function useToggle() {
  // Array of active element names
  const active = ref<string[] | number[]>([]);

  /**
   * Check if item is active
   *
   * @param  {String} item Name of element to check
   * @return {boolean} true/false
   */
  function isActive(item: string | number) {
    return active.value.includes(item);
  }

  /**
   * Toggle item
   *
   * @param  {String} item Name of element to be toggled
   */
  function toggle(item : string | number) {
    console.log('tcisk', item)
    // Get index of item if present
    const itemIndex = active.value.indexOf(item);

    // Add item to active array or remove if already present in array
    itemIndex === -1
      ? active.value.push(item)
      : active.value.splice(itemIndex, 1);

      console.log(`active.value`, active.value)
  }

  return {
    isActive,
    toggle,
    active: active.value,
  };
}
