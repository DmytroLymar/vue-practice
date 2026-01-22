<script setup>
import { ref } from 'vue'

const text = ref('Vue.js')
const message = ref('')
const messageMulti = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('One')
const selected = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])

const toggle = ref('yes')
const age = ref(10)
</script>

<template>
  <input v-model="text" />
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
  <div></div>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ messageMulti }}</p>
  <textarea v-model="messageMulti" placeholder="add multiple lines"></textarea>
  <div></div>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option v-for="option in options" :value="option.value" :key="option.text">
      {{ option.text }}
    </option>
  </select>

  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
  <input v-model.lazy="message" />
  <input v-model.number="age" />
</template>

<style scoped></style>
