import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
import { ref } from "@vue/composition-api";

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
  // Get index of item if present
  const itemIndex = active.value.indexOf(item);

  // Add item to active array or remove if already present in array
  itemIndex === -1
    ? active.value.push(item)
    : active.value.splice(itemIndex, 1);

}
export default function useToggle() {

  return {
    isActive,
    toggle,
  };
}
