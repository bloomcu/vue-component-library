<template>
    <div>
        <!-- Three+ Columns -->
        <section class="position-relative z-index-1 padding-y-xxl border-bottom">
            <div class="container max-width-adaptive-lg">
                <div class="text-component margin-bottom-xl">
                    <h1>Three+ Columns</h1>
                </div>
            </div>
            <div class="container max-width-adaptive-lg">
                <div class="grid" :class="`gap-${gap}`">
                    <div
                        v-for="item in items"
                        :key="item"
                        :class="[determineGridCount, gridColClasses]"
                    >
                        <div class="text-component">
                            <h4>Lorem ipsum dolor</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Quibusdam distinctio inventore architecto.
                            </p>
                            <p>
                                <a href="#0">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
import { GlobalBreakPointBlock } from '@/types'
import { appendToSet } from "@/helpers";
type GridGap =
    | "xxxxs"
    | "xxxs"
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl"
    | "xxxxl"
    | "0";
export default defineComponent({
    props: {
        gap: {
            type: String as PropType<GridGap>,
            default: "xl",
        },
        gridColClasses: {
            type: String,
            default: ''
        },
        customGridCols: {
            type: Boolean,
            default: false
        },
        gridBlock: {
            type: Object as PropType<GlobalBreakPointBlock>,
            default: () => { }
        }
    },
    setup() {
        const amountToGenerate = 1;
        const createItemSample = () => {
            const arr = [];
            for (let i = 0; i < amountToGenerate; i++) {
                arr.push(i);
            }
            return arr;
        };
        const items = createItemSample();
        const exampleGridBlock: GlobalBreakPointBlock = {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2
        }
        const createColClass = ([key, value]: [string, number | string]) => {
            return `col-${value}@${key}`
        }
        const determineGridCount = computed(() => {
            if (exampleGridBlock && Object.keys(exampleGridBlock)) {
                let classGen = ''
                const gridBlockEntries = Object.entries(exampleGridBlock)
                gridBlockEntries.forEach((entry) => {
                    classGen = appendToSet(createColClass(entry), classGen)
                    console.log(`gen`, classGen)
                })
                return classGen
            }
            const amt = items.length
            if (amt === 1) {
                return 'col-12'
            }
            else if (amt < 4) {

            }
            return 'col-6@sm col-4@md'
        })
        return {
            items,
            determineGridCount,
            createColClass
        };
    },
});
</script>
