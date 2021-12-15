<template>
    <div id="app" v-if="page">
        <!-- Info Bar -->
        <div class="flex justify-between items-center bg border-bottom padding-xxs text-sm z-index-3" style="position: -webkit-sticky; position: sticky; top: 0;">
            <span><strong>Source:</strong> https://cms-api.bloomcu.com/api/organizations/bloomcu/pages/1</span>
            <a class="btn btn--subtle btn--sm" target="_blank" href="https://cms.bloomcu.com/organizations/bloomcu/pages/1">Edit in CMS</a>
        </div>

        <!-- Blocks -->
        <component
            v-for="(block, index) in page.layout.blocks"
            v-bind="block.data"
            :is="block.component"
            :key="index"
        />
        <!-- <component v-for="modal in modals" v-bind="modal" is="Modal" :key="modal.uuid" /> -->
        <Footer :groups="groups" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import Footer from '@/lib-components/Footer/Footer.vue';
import { randomId } from '@/helpers';

export default defineComponent({
    name: "ServeDev",
    setup() {
        const { blocks, modals } = require("@/json/blocks");
        const page = ref()

        onMounted(() => {
            // fetch('http://cms.test/api/organizations/bloomcu/pages/1')
            fetch('https://cms-api.bloomcu.com/api/organizations/bloomcu/pages/1')
                .then(response => response.json())
                .then(data => (page.value = data.data))
        })

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
            page,
            blocks,
            modals,
            groups: groupGeneration()
        };
    },
    components: { Footer }
});
</script>
