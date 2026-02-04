<script setup lang="ts">
defineProps<{ title?: string }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="modal">
      <h3>{{ title ?? 'Heavy Modal' }}</h3>
      <p>This component is loaded lazily via dynamic import.</p>
      <button @click="emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: grid;
  place-items: center;
}
.modal {
  width: min(520px, 92vw);
  background: white;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}
button {
  margin-top: 12px;
}
</style>
