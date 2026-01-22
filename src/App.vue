<script setup>
import AlertBox from './AlertBox.vue'
import BlogPost from './BlogPost.vue'
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <ButtonCounter />
  <BlogPost title="First blog" @enlarge-text="postFontSize += 0.1" />
  <AlertBox> Something bad happened. </AlertBox>
</template>
