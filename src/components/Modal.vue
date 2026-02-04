<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

type Props = {
  open: boolean
  title?: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function onBackdropClick(e: MouseEvent) {
  // закриваємо тільки якщо клік по бекдропу (а не по контенту)
  if (e.target === e.currentTarget) emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Transition name="fade">
    <div v-if="open" class="backdrop" @click="onBackdropClick">
      <Transition name="pop">
        <div class="modal" @click.stop>
          <header class="header">
            <h3 class="title">{{ title ?? 'Modal' }}</h3>
            <button class="x" type="button" @click="emit('close')">✕</button>
          </header>

          <div class="body">
            <slot />
          </div>

          <footer class="footer">
            <button class="btn" type="button" @click="emit('close')">Close</button>
          </footer>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
/* backdrop */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: grid;
  place-items: center;
  padding: 24px;
}

/* modal */
.modal {
  width: min(520px, 100%);
  background: white;
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  overflow: hidden;
}

.header, .footer { padding: 14px 16px; }
.body { padding: 16px; }
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.footer {
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.title { margin: 0; font-size: 18px; }
.x {
  border: 0;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
}
.btn {
  border: 1px solid #ddd;
  background: #fafafa;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
}

/* fade transition (backdrop) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* pop transition (modal) */
.pop-enter-active {
  transition: transform 0.18s ease, opacity 0.18s ease;
}
.pop-leave-active {
  transition: transform 0.14s ease, opacity 0.14s ease;
}
.pop-enter-from,
.pop-leave-to {
  transform: scale(0.96);
  opacity: 0;
}
</style>
