<script setup>
const { title, subtitle } = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
})
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
  </div>
</template>

<style scoped>
.container {
  border: var(--border-thickness) solid var(--border-color);
  padding: var(--box-padding);
  margin-bottom: var(--margin-bottom);
  margin-top: var(--margin-top);
  background-color: white;
  box-shadow: 4px 4px #000;
}

h1,
h2 {
  border: none;
  padding: 0;
  margin: 0;
  padding: 0;
  box-shadow: none;
}

h2 {
  font-size: 1rem;
  margin-top: 5px;
  text-transform: none;
}
</style>
