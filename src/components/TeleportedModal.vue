<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open modal</button>

  <Teleport to="#modals">
    <div v-if="open" class="overlay" @click.self="open = false">
      <div class="modal">
        <h3>Modal title</h3>
        <p>Hello from Teleport 👋</p>
        <button @click="open = false">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}
</style>
