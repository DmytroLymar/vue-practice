<script setup lang="ts">
/**
 * 1. Описуємо props (вхідні дані)
 */
defineProps<{
  count: number
}>()

/**
 * 2. Описуємо events, які компонент може emit-ити
 */
const emit = defineEmits<{
  (e: 'increment'): void
  (e: 'decrement'): void
}>()
</script>

<template>
  <div>
    <p>Current count: {{ count }}</p>

    <button @click="emit('decrement')">-</button>
    <button @click="emit('increment')">+</button>
  </div>
</template>
