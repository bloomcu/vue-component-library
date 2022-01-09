<template>
  <Grid :cols="3" :columns="columns" v-slot="{ column }">
    <component :is="variant" v-bind="column" />
  </Grid>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Grid from '../Grid/Grid.vue';
import ContentComponent from '../Content/ContentComponent.vue';
import Card from '../Card/Card.vue';

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'Card',
    },
    columns: {
      type: Array,
      default: () => [
        {
          title: 'Label',
          description: 'Label 1',
        },
        {
          title: 'Label',
          description: 'Label 2',
        },
      ],
    },
  },

  setup: () => ({
    ContentComponent,
    Card,
  }),
  components: { Grid, ContentComponent, Card },
});
</script>
