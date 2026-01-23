<script setup>
defineProps(['title'])
const emit = defineEmits(['increaseBy'])
</script>

<template>
  <button @click="$emit('increaseBy', 1)">Increase by 1</button>
</template>
