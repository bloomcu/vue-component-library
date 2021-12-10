<template>
    <header
        class="bg-contrast-lower bg-opacity-50% padding-y-sm padding-x-md flex items-center justify-between"
    >
        <h1 id="modal-title-1" class="text-truncate text-md">{{ title }}</h1>

        <button
            @click="toggle(uuid)"
            class="reset modal__close-btn modal__close-btn--inner hide@md js-modal__close js-tab-focus"
        >
            <svg class="icon icon--xs" viewBox="0 0 16 16">
                <title>Close modal window</title>
                <g
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                >
                    <line x1="13.5" y1="2.5" x2="2.5" y2="13.5" />
                    <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" />
                </g>
            </svg>
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useToggle from '@/composables/useToggle'
export default defineComponent({
    setup: () => ({
        toggle: useToggle().toggle
    }),
    props: {
        uuid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    }
})
</script>