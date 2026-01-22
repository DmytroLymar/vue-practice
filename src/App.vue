<script>
export default {
  data() {
    return {
      count: 0,
      msg: 'Hello world!',
      id: '22',
      isButtonDisabled: true,
      seen: true,
    }
  },
}
</script>

<template>
  <div :id>
    <button :disabled="isButtonDisabled" @click="count++">{{ count }}</button>
    <p>Message: {{ msg }}</p>
    <p v-if="seen">Now you see me</p>
  </div>
</template>

<style scoped></style>
