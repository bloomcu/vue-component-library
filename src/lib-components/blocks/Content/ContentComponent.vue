<template>
  <div
    class="content-component"
    :class="center ? 'text-center' : ''"
  >
    <div
      v-if="label"
      class="text-sm opacity-60% margin-bottom-xxs"
    >
      {{ label }}
    </div>

    <div class="text-component margin-bottom-sm">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">
        {{ subtitle }}
      </p>
    </div>

    <div
      v-if="buttons.length"
      class="flex flex-wrap items-center gap-sm"
      :class="center ? 'flex-center' : ''"
    >
      <AppButton
        v-for="(button, index) in buttons"
        :key="index"
        :text="button.text"
        :href="button.href"
        v-bind="button"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

// Components
import AppButton from '@/lib-components/elements/AppButton/AppButton.vue'

// Types
import { Button } from '@/types'

export default defineComponent({
  props: {
    center: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'The label'
    },
    title: {
      type: String,
      default: 'The title'
    },
    subtitle: {
      type: String,
      default: 'The subtitle'
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => []
    }
  },

  components: { AppButton }
})
</script>
