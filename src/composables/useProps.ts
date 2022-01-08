import { PropType } from "@vue/composition-api"

// Types
import { GlobalCodyButton, Size, Variant } from "@/types"

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
            default: 'The subtitle'
        },
        buttons: {
            type: Array as PropType<Array<GlobalCodyButton>>,
            default: () => [],
        },
    },
    Button: {
        variant: {
            type: String as PropType<Variant>,
            default: 'accent',
        },
        text: {
            type: String,
            default: ''
        },
        size: {
            type: String as PropType<Size>,
            default: '',
        },
        trigger: {
            type: String,
            default: ''
        },
        icon: Boolean,
    }
}


export function useProps() {
    const group = (items: (keyof typeof propGroups)[]) => {
        let propSet = {}
        items.forEach((item) => {
            propSet = { ...propSet, ...propGroups[item] }
        })
        return propSet
    }
    return {
        group,
        propGroups
    }
}