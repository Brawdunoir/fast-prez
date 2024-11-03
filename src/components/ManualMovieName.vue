<script setup>
import { ref } from 'vue'

const movieTitle = ref('')

const emit = defineEmits(['movie-title'])

function submitTitle() {
  emit('movie-title', movieTitle)
}
</script>

<template>
<div :class="[movieTitle.length > 0 ? 'container' : 'container faded']">
  <label>{{ $t('manualMovieName.description') }}</label>
  <input @keydown.enter="submitTitle" type="text" :placeholder="$t('manualMovieName.inputPlaceholder')" v-model="movieTitle">
  <button @click="submitTitle">Go</button>
</div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  text-align: center;
  gap: var(--margin-bottom);
  width: 100%;
}
.faded {
  opacity: 0.6;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
}
label {
  margin-bottom: var(--margin-bottom);
}
</style>
