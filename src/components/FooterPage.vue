<script setup>
const version = "0.3.2";
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
