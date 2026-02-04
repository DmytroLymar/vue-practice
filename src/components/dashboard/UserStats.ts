// UserStats.ts
import { defineAsyncComponent } from 'vue'

export default defineAsyncComponent(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          template: `<p>Posts: 42 | Likes: 1337</p>`,
        })
      }, 1500)
    }),
)
