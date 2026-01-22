<script setup>
defineProps(['title'])
const emit = defineEmits(['enlarge-text'])
</script>

<template>
  <button @click="emit('enlarge-text')">Enlarge</button>
</template>
