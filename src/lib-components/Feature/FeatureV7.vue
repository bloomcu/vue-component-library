<template>
    <Grid :cols="2" v-slot="{ column }" :columns="children">
        <div>
            <div class="flex items-center gap-sm">
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
                        src: 'https://codyhouse.co/app/assets/img/feature-v7-img-2.svg'
                    }
                },
                {
                    title: 'Title 2',
                    description: 'Desc 2',
                    image: {
                        src: 'https://codyhouse.co/app/assets/img/feature-v7-img-4.svg'
                    }
                },
            ])
        }
    }
})
</script>