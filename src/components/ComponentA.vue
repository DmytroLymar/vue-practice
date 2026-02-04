<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <h3>Component A</h3>
    <button @click="count++">Count: {{ count }}</button>
  </div>
</template>
