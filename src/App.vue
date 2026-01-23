<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1>This is the header</h1>
    </template>

    <template #default>
      <p>This is the content</p>
    </template>

    <template #footer>
      <em>This is the footer</em>
    </template>
  </BaseLayout>
</template>
