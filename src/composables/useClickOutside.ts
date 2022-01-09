import { Ref } from '@vue/composition-api';
import { useEventListener } from './useEventListener';
export default function useClickOutside(
  rootEl: Ref<HTMLElement | null>,
  callback: (e: Event) => any
) {
  // `mousedown` or `mouseup` is better than `click` here because it doesn't bubble up like `click`
  // if you've used `click` here, the callback will be run immediatly.
  useEventListener(window, 'mouseup', (e: Event) => {
    const clickedEl = e.target as HTMLElement;
    // skip if the root element contains the clicked element
    if (rootEl.value?.contains(clickedEl)) return;

    // otherwise execute the action
    callback(e);
  });
}
