<script setup>
import { computed, ref } from 'vue'

const isActive = ref(true)
const error = ref(true)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value?.type === 'fatal',
}))
</script>

<template>
  <div class="static" :class="classObject">Text</div>
  <div class="static" :class="{ active: isActive }">Text</div>
  <div class="static">Text</div>
  <div class="static" :class="{ active: isActive }">Text</div>
</template>

<style scoped>
.static {
  background-color: red;
  width: 200px;
  height: 20px;
}
.active {
  background-color: aquamarine;
}
.text-danger {
  color: brown;
}
</style>
