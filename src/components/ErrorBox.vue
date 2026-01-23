<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="box error">
    Failed to load component.
    <div v-if="message" class="msg">{{ message }}</div>
  </div>
</template>

<style scoped>
.box {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
.error {
  border-color: #f00;
}
.msg {
  margin-top: 8px;
  opacity: 0.8;
}
</style>
