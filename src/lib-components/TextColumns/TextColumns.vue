<template>
  <Grid
    v-slot="{ column }"
    :cols="3"
    :columns="columns"
  >
    <ContentComponent v-bind="column" />
  </Grid>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Grid from '../Grid/Grid.vue'
import ContentComponent from '../Content/ContentComponent.vue'

export default defineComponent({
  name: 'TextColumns',
  components: { Grid, ContentComponent },
  props: {
    columns: {
      type: Array,
      default: () => [
        {
          label: 'Label',
          title: 'Labels',
          subtitle: 'Label',
          component: 'card'
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

  setup: () => ({
    ContentComponent
  })
})
</script>
