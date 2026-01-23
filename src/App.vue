<script setup lang="ts">
import { ref } from 'vue'
import CounterButton from './CounterButton.vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <h1>Parent Counter</h1>

  <CounterButton :count="count" @increment="increment" @decrement="decrement" />
</template>
