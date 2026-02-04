<script setup>
import { ref } from 'vue'
const message = ref('')
</script>

<template>
  <div>
    <h3>Component B</h3>
    <input v-model="message" placeholder="Type here..." />
    <p>{{ message }}</p>
  </div>
</template>
