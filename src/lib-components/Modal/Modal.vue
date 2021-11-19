<template>
    <div>
        <template v-if="active">
            <div class="overlay"></div>
            <div class="modal flex flex-center">
                <div >
                    <button @click="toggle(uuid)">
                        Cick to close
                    </button>
                </div>
            </div>
        </template>
        <!-- {{ active + uuid }}
        {{activeItems}} -->
        <button @click="toggle(uuid)">toggle modal</button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import useToggle from '@/composables/useToggle'
export default defineComponent({
    props: {
        uuid: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const randomId = (Math.random() + 1).toString(36).substring(7);
        const { toggle, isActive, active: activeItems } = useToggle()
        const active = computed(() => isActive(props.uuid))
        return {
            active,
            toggle,
            randomId,
            activeItems
        }
    }
})
</script>

<style lang="scss" scoped>
@mixin full-screen {
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
}
.modal {
    @include full-screen();
    position: fixed;
    z-index: 25;
}
.overlay {
    @include full-screen();
    position: fixed;
    background-color: black;
    opacity: .35;
    z-index: 20;
}
</style>