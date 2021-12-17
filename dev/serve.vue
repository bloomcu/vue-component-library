<template>
    <div id="app">
        <!-- <component
            v-for="(block, index) in blocks"
            v-bind="block"
            :is="block.component"
            :key="index"
        />
        <component v-for="modal in modals" v-bind="modal" is="Modal" :key="modal.uuid" />-->
        <Footer
            :primaryLinks="groups"
            :secondaryLinks="[{
                text: 'test',
                href: '/testlink'
            },
            {
                text: 'test2',
                href: '/testlink2'
            }]"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Footer from '@/lib-components/Footer/Footer.vue';
import { randomId } from '@/helpers';

export default defineComponent({
    name: "ServeDev",
    setup() {
        const { blocks, modals } = require("@/json/blocks");
        const groupGeneration = () => {
            const amount = 4
            const arr = []
            for (let i = 0; i < amount; i++) {
                const groupItem = {
                    title: randomId(),
                    links: [
                        {
                            href: '#',
                            text: randomId()
                        },
                        {
                            href: '#',
                            text: randomId()
                        },
                        {
                            href: '#',
                            text: randomId()
                        },
                        {
                            href: '#',
                            text: randomId()
                        },
                    ]
                }
                arr.push(groupItem)
            }
            return arr
        }
        return {
            blocks,
            modals,
            groups: groupGeneration()
        };
    },
    components: { Footer }
});
</script>
