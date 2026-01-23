<script setup>
import Modal from '@/components/Modal.vue'
import { useModal } from '@/composables/useModal'

const { isOpen, open, close } = useModal()
</script>

<template>
  <button @click="open">Open modal</button>

  <Modal :open="isOpen" @close="close">
    <h3>Hello 👋</h3>
    <p>This modal uses a composable</p>
  </Modal>
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
