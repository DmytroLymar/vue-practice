<script setup>
import { reactive, ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
})
</script>

<template>
  <ul>
    <li v-for="({ message }, index) in items" :key="message">
      {{ parentMessage }} - {{ index }} - {{ message }}
    </li>
  </ul>
  <div class="delimiter"></div>
  <ul>
    <li v-for="(value, key, index) in myObject" :key="key">{{ index }}. {{ key }}: {{ value }}</li>
  </ul>
  <div class="delimiter"></div>
  <span v-for="n in 10" :key="n">{{ n }}</span>
  <div class="delimiter"></div>
  <ul v-for="numbers in sets" :key="numbers.join('')">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>
</template>

<style scoped>
.delimiter {
  width: full;
  height: 2px;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: black;
}
</style>
