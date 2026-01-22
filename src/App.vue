<script setup>
import { reactive, computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const setNewName = () => {
  fullName.value = 'Dave Valentino'
}

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})
</script>

<template>
  <div>
    <p>Fullname: {{ fullName }}</p>
    <button @click="setNewName">Set new name</button>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<style scoped></style>
