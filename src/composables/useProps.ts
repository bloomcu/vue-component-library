import { PropType } from '@vue/composition-api';

// Types
import { Button, ButtonSize, ButtonVariant } from '@/types';

const propGroups = {
  ContentComponent: {
    center: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'The label',
    },
    title: {
      type: String,
      default: 'The title',
    },
    subtitle: {
      type: String,
      default: 'The subtitle',
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => [],
    },
  },
  Button: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'accent',
    },
    text: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: '',
    },
    trigger: {
      type: String,
      default: '',
    },
    icon: Boolean,
  },
};

export function useProps() {
  const group = (items: (keyof typeof propGroups)[]) => {
    let propSet = {};
    items.forEach((item) => {
      propSet = { ...propSet, ...propGroups[item] };
    });
    return propSet;
  };
  return {
    group,
    propGroups,
  };
}
