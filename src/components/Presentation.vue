<script setup>
import { ref } from 'vue'
const { parsedInfo, movieDetails } = defineProps({
  parsedInfo: {
    type: Object
  },
  movieDetails: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container box" contenteditable="true">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 65%;
  padding: var(--box-padding);
  overflow-y: hidden;    /* Hides the vertical scrollbar */
}

.content {
  font-size: .9rem;
  font-family: monospace;
  color: var(--accent-color);
  line-height: 1.4rem;
}
</style>
