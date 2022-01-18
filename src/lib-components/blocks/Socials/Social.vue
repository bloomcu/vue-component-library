<template>
  <Link
    :href="social.href"
    :target="social.target"
    :title="social.name"
  >
    <component :is="social.name" />
  </Link>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Facebook from './Facebook.vue'
import Github from './Github.vue'
import Youtube from './Youtube.vue'
import Twitter from './Twitter.vue'

export default defineComponent({
  components: { Facebook, Github, Youtube, Twitter },
  props: {
    social: {
      type: Object as PropType<any>,
      default: () => ({})
    }
  }
})
</script>
