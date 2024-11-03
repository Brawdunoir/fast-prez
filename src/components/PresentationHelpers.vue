<template>
<div class="container">
  <h2>{{ $t('wip') }}</h2>
  <div class="helpers-container">
    <p class="box quality">BluRay</p>
    <p class="box quality">WEBRip</p>
    <p class="box quality">HDTV</p>
    <p class="box quality">Remux</p>
    <p class="box quality">Raw</p>
    <p class="box dimensions">480p</p>
    <p class="box dimensions">576p</p>
    <p class="box dimensions">720p</p>
    <p class="box dimensions">1080p</p>
    <p class="box dimensions">2160p</p>
    <p></p>

  </div>
</div>
</template>

<style scoped>
.container {
  width: 35%;
  opacity: 0.8;
}
.quality {
  background-color: var(--secondary-color);
}
.dimensions {
  background-color: var(--accent-color);
}
.helpers-container {
  opacity: 0.6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--margin-bottom)/2);
}
</style>
