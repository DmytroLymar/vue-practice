<script setup>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'

import LoadingBox from './components/LoadingBox.vue'
import ErrorBox from './components/ErrorBox.vue'

const isOpen = ref(false)

// async component wrapper
const AsyncHeavyModal = defineAsyncComponent({
  loader: () => import('./components/HeavyModal.vue'),
  loadingComponent: LoadingBox,
  delay: 200,
  // simple error component
  errorComponent: ErrorBox,
  timeout: 4000,
})
</script>

<template>
  <div class="page">
    <h2>Async Component demo</h2>

    <button @click="isOpen = true">Open modal (lazy)</button>

    <!-- the modal chunk is requested ONLY when this renders -->
    <AsyncHeavyModal v-if="isOpen" title="Async modal" @close="isOpen = false" />
  </div>
</template>

<style scoped>
.page {
  padding: 18px;
  display: grid;
  gap: 12px;
}
button {
  width: fit-content;
  padding: 8px 12px;
}
</style>
