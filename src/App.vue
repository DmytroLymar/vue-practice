<script setup>
import { ref } from 'vue'
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'

const current = ref('ComponentA')

const components = {
  ComponentA,
  ComponentB
}
</script>

<template>
  <label><input type="radio" v-model="current" value="ComponentA" /> A</label>
  <label><input type="radio" v-model="current" value="ComponentB" /> B</label>

  <KeepAlive>
    <component :is="components[current]"></component>
  </KeepAlive>
</template>
