<script setup>
const version = import.meta.env.VITE_APP_VERSION ?? 'dev';
</script>

<template>
  <footer>
    <span>Version {{ version }}</span>
    <span>Made with 💚 by Yann.</span>
  </footer>
</template>

<style scoped>
footer {
  padding-bottom: var(--box-padding);
  margin-top: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
</style>
