<script setup>
import { onMounted, ref } from 'vue'

const count = ref(0)
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
