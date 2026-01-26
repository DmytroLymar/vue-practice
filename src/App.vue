<script setup>
import Dashboard from './components/dashboard/Dashboard.vue'
</script>

<template>
  <Suspense>
    <Dashboard />

    <template #fallback>
      <p>Loading dashboard...</p>
    </template>
  </Suspense>
</template>
