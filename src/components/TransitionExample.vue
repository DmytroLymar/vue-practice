<script setup lang="ts">
import { ref } from 'vue'

type Item = { id: number; text: string }

let nextId = 6

const items = ref<Item[]>([
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
  { id: 4, text: '4' },
  { id: 5, text: '5' }
])

function addRandom() {
  const index = Math.floor(Math.random() * (items.value.length + 1))
  items.value.splice(index, 0, { id: nextId++, text: String(nextId - 1) })
}

function removeRandom() {
  if (items.value.length === 0) return
  const index = Math.floor(Math.random() * items.value.length)
  items.value.splice(index, 1)
}

function shuffle() {
  // простий shuffle (Fisher–Yates)
  const arr = [...items.value]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  items.value = arr
}
</script>

<template>
  <div class="wrap">
    <div class="controls">
      <button @click="addRandom">Add</button>
      <button @click="removeRandom">Remove</button>
      <button @click="shuffle">Shuffle</button>
    </div>

    <TransitionGroup name="list" tag="ul" class="list">
      <li v-for="item in items" :key="item.id" class="item">
        Item {{ item.text }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.wrap { padding: 24px; }
.controls { display: flex; gap: 10px; margin-bottom: 16px; }

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative; /* потрібно через absolute на leave */
}

.item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 10px;
}

/* enter/leave + move */
.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.25s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* важливо: щоб сусіди могли “з’їхати” плавно */
.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
