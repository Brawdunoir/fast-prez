<template>
  <header class="header">
    <span>Quick Media Craft</span>
    <a href="https://github.com/Brawdunoir/quick-media-craft"><img src="../assets/github-logo.svg" alt=""></a>
  </header>
</template>

<style scoped>
* {
  text-transform: uppercase;
}

.header {
  display: flex;
  background-color: var(--accent-color);
  text-align: center;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 40px;
  border-bottom: var(--border-thickness) solid var(--border-color);
}

a {
  height: 40px;
  width: 40px;
}
img {
  transform: scale(.4) translateY(-110px) translateX(-220px);
}
</style>
