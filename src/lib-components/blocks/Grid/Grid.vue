<template>
  <section class="position-relative z-index-1 padding-y-xxl">
    <div class="container max-width-adaptive-lg">
      <div
        class="grid"
        :class="`gap-${gap}`"
      >
        <div
          v-for="(column, index) in columns"
          :key="index"
          :class="determineGridCount"
        >
          <slot
            :index="index"
            :column="column"
          >
            Col: {{ index }}
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { BreakPointBlock } from '@/types'
import { appendToSet } from '@/helpers'
import ContentComponent from '@/lib-components/blocks/Content/ContentComponent.vue'
type GridGap = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '0';
type ColNumber = 1 | 2 | 3 | 4 | 6 | 12
export default defineComponent({
  props: {
    gap: {
      type: String as PropType<GridGap>,
      default: 'xl'
    },
    cols: {
      type: Number as PropType<ColNumber>,
      default: 4
    },
    columns: {
      type: Array as PropType<any>,
      default: () => [
        {
          label: 'Label',
          title: 'Label',
          subtitle: 'Label'
        },
        {
          label: 'Label',
          title: 'Label',
          subtitle: 'Label',
          center: true
        }
      ]
    }
  },
  setup (props) {
    const createColClass = ([key, value]: [string, number | string]) => {
      return `col-${value}@${key}`
    }
    const determineGridCount = computed(() => {
      const defineGridBlock: BreakPointBlock = {
        xs: 12,
        md: 6,
        lg: 12 / props.cols
      }
      let classGen = ''
      const gridBlockEntries = Object.entries(defineGridBlock)
      gridBlockEntries.forEach((entry) => {
        classGen = appendToSet(createColClass(entry), classGen)
      })
      return classGen
    })
    return {
      determineGridCount,
      createColClass
    }
  },
  components: { ContentComponent }
})
</script>
