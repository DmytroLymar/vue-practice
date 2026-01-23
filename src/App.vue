<script setup lang="ts">
import { ref } from 'vue'
import CounterButton from './CounterButton.vue'
import BaseInput from './BaseInput.vue'

const count = ref(0)
const email = ref('')

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

  <BaseInput v-model="email" />
  <p>{{ email }}</p>
</template>
