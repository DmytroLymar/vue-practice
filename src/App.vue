<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

function say(message) {
  alert(message)
}

function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
  <button @click="greet">Greet</button>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>
</template>

<style scoped></style>
