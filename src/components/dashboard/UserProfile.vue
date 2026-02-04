<script setup>
const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
const user = await res.json()
</script>

<template>
  <h3>{{ user.name }}</h3>
  <p>{{ user.email }}</p>
</template>
