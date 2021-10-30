import { GlobalCodyButtonProps, GlobalCtaLink } from "@/types";
import { PropType } from "@vue/composition-api";
export const props = {
  button: {
    type: Object as PropType<GlobalCodyButtonProps>,
    default: () => {},
  },
  ctaLink: {
    type: Object as PropType<GlobalCtaLink>,
    default: () => {},
  },
};
const sets = {
  ctaSet: {
    button: props.button,
    ctaLink: props.ctaLink,
  },
};
type commonProps = keyof typeof props;
type commonSets = keyof typeof sets;

export const useProps = () => {
  //   const { button, ctaLink } = props;
  return {
    ...props,
    ...sets,
    group: (availableProps: commonProps[]) => {
      let obj: any = {};
      availableProps.forEach((k) => {
        obj[k] = props[k];
      });
      return obj;
    },
    getSet: (availableSet: commonSets) => {
      return sets[availableSet];
    },
  };
};
