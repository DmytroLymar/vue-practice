<script setup lang="ts">
import { ref } from 'vue'
import Modal from './components/Modal.vue'

const isOpen = ref(false)
</script>

<template>
  <div style="padding: 24px;">
    <button @click="isOpen = true">Open modal</button>

    <Modal
      :open="isOpen"
      title="Confirm action"
      @close="isOpen = false"
    >
    <p>Transition + props + emit.</p>
      <p>✕ or ESC to close</p>
    </Modal>
  </div>
</template>
