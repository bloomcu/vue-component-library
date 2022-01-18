<template>
  <input
    v-model="searchValue"
    class="form-control width-100%"
    type="reset search"
  >
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup () {
    const searchValue = ref('')
    return {
      searchValue
    }
  }
})
</script>
