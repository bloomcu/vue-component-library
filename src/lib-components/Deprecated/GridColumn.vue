<!-- <template>
    <div :class="determineGridCount">
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import { GlobalBreakPointBlock } from '@/types'
import { appendToSet } from "@/helpers";
// type GridGap =
//     | "xxs"
//     | "xs"
//     | "sm"
//     | "md"
//     | "lg"
//     | "xl"
//     | "0";

export default defineComponent({
    props: {
        cols: {
            type: Number,
            default: 4
        },
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
                xl: 12 / props.cols,
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
});
</script> -->
<template>
<div>grid column</div>
</template>