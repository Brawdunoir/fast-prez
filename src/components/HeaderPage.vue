<template>
  <header class="header">
    <div class="nameContainer">
      <span style="font-size: 1.5rem;">FastPrez</span>
      <span style="font-size: 0.6rem;">{{ $t('app.catchPhrase') }}</span>
    </div>
    <a href="https://github.com/Brawdunoir/fast-prez"><img src="../assets/github-logo.svg" alt=""></a>
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

.nameContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
}

a {
  height: 40px;
  width: 40px;
}

img {
  transform: scale(.4) translateY(-110px) translateX(-220px);
}
</style>
