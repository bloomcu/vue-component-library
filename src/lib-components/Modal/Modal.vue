<template>
    <div>
        <div
            :class="active ? 'modal--is-visible' : ''"
            id="modal-name-1"
            class="modal modal--animate-scale flex flex-center bg-black bg-opacity-90% padding-md js-modal"
        >
            <div
                class="modal__content width-100% max-width-xs max-height-100% overflow-auto bg radius-md inner-glow shadow-md"
                role="alertdialog"
                aria-labelledby="modal-title-1"
                aria-describedby="modal-description-1"
            >
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

                <div class="padding-y-sm padding-x-md">
                    <div class="text-component">
                        <p
                            id="modal-description-1"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa, inventore alias ab atque similique quod ea reprehenderit.</p>
                    </div>
                    <component
                        v-for="(block, index) in blocks"
                        v-bind="block"
                        :is="block.component"
                        :key="index"
                    />
                </div>
            </div>

            <button
                @click="toggle(uuid)"
                class="reset modal__close-btn modal__close-btn--outer display@md js-modal__close js-tab-focus"
            >
                <svg class="icon icon--sm" viewBox="0 0 24 24">
                    <title>Close modal window</title>
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="3" y1="3" x2="21" y2="21" />
                        <line x1="21" y1="3" x2="3" y2="21" />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
import useToggle from '@/composables/useToggle'
import useComponents from "@/composables/useComponents";
import { Block } from "@/types";
const { components, getComponents } = useComponents()
console.log(`components`, components)
export default defineComponent({
    components: {
        ...components
    },
    props: {
        uuid: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        blocks: {
            type: Object as PropType<Block[]>,
            default: () => []
        }
    },
    setup(props) {
        const { toggle, isActive } = useToggle()
        const active = computed(() => isActive(props.uuid))
        const blockNames = computed(() => props.blocks.map((b: any) => b.component))
        const findComponents = computed(() => getComponents(blockNames.value))
        // watch(() => findComponents.value, (val) => {
        //     console.log(`val`, val)
        // })
        // console.log(`findComponents`, findComponents)
        // console.log(`blockNames`, blockNames.value)
        // console.log(`props.modal`, props.blocks)
        return {
            active,
            toggle,
            findComponents,
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
// .modal {
//     @include full-screen();
//     position: fixed;
//     z-index: 25;
// }
// .overlay {
//     @include full-screen();
//     position: fixed;
//     background-color: black;
//     opacity: 0.35;
//     z-index: 5;
// }
/* -------------------------------- 

File#: _1_modal-window
Title: Modal Window
Descr: A modal dialog used to display critical information
Usage: codyhouse.co/license

-------------------------------- */
.modal {
    position: fixed;
    z-index: var(--z-index-overlay, 15);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
}
.modal:not(.modal--is-visible) {
    pointer-events: none;
    background-color: transparent;
}

.modal--is-visible {
    opacity: 1;
    visibility: visible;
}

.modal__close-btn {
    display: flex;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 50%;
    transition: 0.2s;
}
.modal__close-btn .icon {
    display: block;
    margin: auto;
}

.modal__close-btn--outer {
    width: 48px;
    height: 48px;
    position: fixed;
    top: var(--space-sm);
    right: var(--space-sm);
    z-index: var(--z-index-fixed-element, 10);
    background-color: hsla(
        var(--color-black-h),
        var(--color-black-s),
        var(--color-black-l),
        0.9
    );
    transition: 0.2s;
}
.modal__close-btn--outer .icon {
    color: var(--color-white);
    transition: -webkit-transform 0.3s var(--ease-out-back);
    transition: transform 0.3s var(--ease-out-back);
    transition: transform 0.3s var(--ease-out-back),
        -webkit-transform 0.3s var(--ease-out-back);
}
.modal__close-btn--outer:hover {
    background-color: hsla(
        var(--color-black-h),
        var(--color-black-s),
        var(--color-black-l),
        1
    );
}
.modal__close-btn--outer:hover .icon {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.modal__close-btn--inner {
    --size: 32px;
    width: var(--size);
    height: var(--size);
    background-color: var(--color-bg-light);
    box-shadow: var(--inner-glow), var(--shadow-sm);
    transition: 0.2s;
}
.modal__close-btn--inner .icon {
    color: inherit;
}
.modal__close-btn--inner:hover {
    background-color: var(--color-bg-lighter);
    box-shadow: var(--inner-glow), var(--shadow-md);
}

:root {
    --modal-transition-duration: 0.2s;
}

@media (prefers-reduced-motion: no-preference) {
    .modal--animate-fade {
        --modal-transition-duration: 0.2s;
        transition: opacity var(--modal-transition-duration),
            background-color var(--modal-transition-duration),
            visibility 0s var(--modal-transition-duration);
    }
    .modal--animate-fade.modal--is-visible {
        transition: opacity var(--modal-transition-duration),
            background-color var(--modal-transition-duration), visibility 0s;
    }

    .modal--animate-scale,
    .modal--animate-translate-up,
    .modal--animate-translate-down,
    .modal--animate-translate-right,
    .modal--animate-translate-left {
        --modal-transition-duration: 0.2s;
        transition: opacity var(--modal-transition-duration),
            background-color var(--modal-transition-duration),
            visibility 0s var(--modal-transition-duration);
    }
    .modal--animate-scale .modal__content,
    .modal--animate-translate-up .modal__content,
    .modal--animate-translate-down .modal__content,
    .modal--animate-translate-right .modal__content,
    .modal--animate-translate-left .modal__content {
        will-change: transform;
        transition: -webkit-transform var(--modal-transition-duration)
            var(--ease-out);
        transition: transform var(--modal-transition-duration) var(--ease-out);
        transition: transform var(--modal-transition-duration) var(--ease-out),
            -webkit-transform var(--modal-transition-duration) var(--ease-out);
    }
    .modal--animate-scale.modal--is-visible,
    .modal--animate-translate-up.modal--is-visible,
    .modal--animate-translate-down.modal--is-visible,
    .modal--animate-translate-right.modal--is-visible,
    .modal--animate-translate-left.modal--is-visible {
        transition: opacity var(--modal-transition-duration),
            background-color var(--modal-transition-duration), visibility 0s;
    }
    .modal--animate-scale.modal--is-visible .modal__content,
    .modal--animate-translate-up.modal--is-visible .modal__content,
    .modal--animate-translate-down.modal--is-visible .modal__content,
    .modal--animate-translate-right.modal--is-visible .modal__content,
    .modal--animate-translate-left.modal--is-visible .modal__content {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    .modal--animate-slide-up,
    .modal--animate-slide-down,
    .modal--animate-slide-right,
    .modal--animate-slide-left {
        --modal-transition-duration: 0.3s;
        transition: opacity 0s var(--modal-transition-duration),
            background-color var(--modal-transition-duration),
            visibility 0s var(--modal-transition-duration);
    }
    .modal--animate-slide-up .modal__content,
    .modal--animate-slide-down .modal__content,
    .modal--animate-slide-right .modal__content,
    .modal--animate-slide-left .modal__content {
        will-change: transform;
        transition: -webkit-transform var(--modal-transition-duration)
            var(--ease-out);
        transition: transform var(--modal-transition-duration) var(--ease-out);
        transition: transform var(--modal-transition-duration) var(--ease-out),
            -webkit-transform var(--modal-transition-duration) var(--ease-out);
    }
    .modal--animate-slide-up.modal--is-visible,
    .modal--animate-slide-down.modal--is-visible,
    .modal--animate-slide-right.modal--is-visible,
    .modal--animate-slide-left.modal--is-visible {
        transition: background-color var(--modal-transition-duration),
            visibility 0s;
    }
    .modal--animate-slide-up.modal--is-visible .modal__content,
    .modal--animate-slide-down.modal--is-visible .modal__content,
    .modal--animate-slide-right.modal--is-visible .modal__content,
    .modal--animate-slide-left.modal--is-visible .modal__content {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    .modal--animate-scale .modal__content {
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
    }

    .modal--animate-translate-up .modal__content {
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
    }

    .modal--animate-translate-down .modal__content {
        -webkit-transform: translateY(-40px);
        transform: translateY(-40px);
    }

    .modal--animate-translate-right .modal__content {
        -webkit-transform: translateX(-40px);
        transform: translateX(-40px);
    }

    .modal--animate-translate-left .modal__content {
        -webkit-transform: translateX(40px);
        transform: translateX(40px);
    }

    .modal--animate-slide-up .modal__content {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }

    .modal--animate-slide-down .modal__content {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }

    .modal--animate-slide-right .modal__content {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    .modal--animate-slide-left .modal__content {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
}
.modal--is-loading .modal__content {
    visibility: hidden;
}
.modal--is-loading .modal__loader {
    display: flex;
}

.modal__loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: none;
    pointer-events: none;
}
</style>