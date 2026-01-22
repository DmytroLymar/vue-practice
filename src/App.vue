<script>
import { nextTick } from 'vue'

export default {
  data() {
    return {
      count: 1,
      msg: 'Hello world!',
      id: '22',
      isButtonDisabled: false,
      seen: true,
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar'],
      },
    }
  },

  methods: {
    async increment() {
      this.count++
      await nextTick()
    },
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    },
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
    console.log(this.count) // => 1

    // data can be mutated as well
    this.count = 7
  },
}
</script>

<template>
  <div :id>
    <button :disabled="isButtonDisabled" @click="increment">{{ count }}</button>
    <p>Message: {{ msg }}</p>
    <p v-if="seen">Now you see me</p>
    <p>deep count: {{ obj.nested.count }}</p>
    <p>deep arr: {{ obj.arr.join(' ') }}</p>
    <button @click="mutateDeeply">Deep mutate</button>
  </div>
</template>

<style scoped></style>
