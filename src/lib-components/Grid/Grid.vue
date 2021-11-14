<template>
    <section class="position-relative z-index-1 padding-y-xxl">
        <div class="container max-width-adaptive-lg">
            <div class="grid" :class="`gap-${gap}`">
                <div v-for="(column, index) in columns" :key="index" :class="determineGridCount">
                    <slot :index="index" :column="column">
                        <component :is="element" v-bind="column"></component>
                    </slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
import { GlobalBreakPointBlock } from '@/types'
import { appendToSet } from "@/helpers";
import ContentComponent from "../Content/ContentComponent.vue";
type GridGap =
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "0";

export default defineComponent({
    props: {
        gap: {
            type: String as PropType<GridGap>,
            default: "xl",
        },
        cols: {
            type: Number,
            default: 4
        },
        columns: {
            type: Array,
            default: () => ([
                {
                    label: "Label",
                    title: "Label",
                    subtitle: "Label",
                },
                {
                    label: "Label",
                    title: "Label",
                    subtitle: "Label",
                    center: true
                },
            ])
        },
        element: {
            type: undefined,
            default: 'ContentComponent'
        }
    },
    setup(props) {

        const createColClass = ([key, value]: [
            string,
            number | string
        ]) => {
            return `col-${value}@${key}`;
        };
        const determineGridCount = computed(() => {
            const defineGridBlock: GlobalBreakPointBlock = {
                xs: 12,
                md: 6,
                lg: 12 / props.cols,
            };
            let classGen = "";
            const gridBlockEntries = Object.entries(defineGridBlock);
            gridBlockEntries.forEach((entry) => {
                classGen = appendToSet(createColClass(entry), classGen);
            });
            return classGen;
        });
        return {
            determineGridCount,
            createColClass
        };
    },
    components: { ContentComponent }
});
</script>
