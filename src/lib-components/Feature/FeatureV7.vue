<template>
    <Grid :cols="2" v-slot="{ column }" :columns="children">
        <div>
            <div class="flex gap-sm">
                <figure class="flex-shrink-0">
                    <img class="block width-xl width-xxxl@md" v-bind="column.image" />
                </figure>

                <div class="text-component">
                    <h4>{{ column.title }}</h4>
                    <p>{{ column.description }}</p>
                </div>
            </div>
        </div>
    </Grid>
</template>


<script lang="ts">
import { Image } from '@/types';
import { defineComponent, PropType } from '@vue/composition-api';
import Grid from '../Grid/Grid.vue';
interface FeatureV7Item {
    title: string
    description: string
    image: Image
}
export default defineComponent({
    components: { Grid },
    props: {
        children: {
            type: Array as PropType<FeatureV7Item[] | any>,
            default: () => ([
                {
                    title: 'Title 1',
                    description: 'Desc 1',
                    image: {
                        src: 'http://placeimg.com/640/480/animals'
                    }
                },
                {
                    title: 'Title 2',
                    description: 'Desc 2',
                    image: {
                        src: 'http://placeimg.com/640/480/animals'
                    }
                },
            ])
        }
    }
})
</script>