<template>
    <Fragment>
        <ColumnDropdown
            v-if="group.children && group.children.length"
            :group="group"
        />
        <CodyButton
            v-else-if="group.button"
            class="mega-nav__btn"
            v-bind="group.button"
            variant="primary"
            size="sm"
        ></CodyButton>
        <Link v-else v-bind="group.link" class="mega-nav__control"></Link>
    </Fragment>
</template>


<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Fragment } from 'vue-fragment'
import ColumnDropdown from './ColumnDropdown.vue'
import CodyButton from '../CodyButton/CodyButton.vue'
import Link from '../Link/Link.vue'
import { NavbarLink } from '@/types'
import { randomId } from '@/helpers'

export default defineComponent({
    components: {
        Fragment,
        ColumnDropdown,
        CodyButton,
        Link
    },
    props: {
        group: {
            type: Object as PropType<NavbarLink>,
            default: () => ({
                uuid: randomId()
            })
        }
    }
})
</script>