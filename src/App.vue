<script setup></script>

<template>
  <ButtonCounter />
  <BlogPost title="First blog" @enlarge-text="postFontSize += 0.1" />
  <AlertBox> Something bad happened. </AlertBox>
</template>
