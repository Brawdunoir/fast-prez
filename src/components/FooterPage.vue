<script setup>
const version = "0.4.0";
</script>

<template>
  <footer>
    <span>Version {{ version }}</span>
    <span>Made with ❤️ by Yann.</span>
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
