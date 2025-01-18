<script setup>
const { title, releaseDate, posterPath, overview } = defineProps({
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String
  },
  posterPath: {
    type: String
  },
  overview: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card box">
    <div class="card-thumbnail">
      <img v-if="posterPath" :src="`https://image.tmdb.org/t/p/w500${posterPath}`" loading="lazy" alt="Movie Poster"
        class="card-thumbnail">
    </div>
    <div class="card-content">
      <p><strong>{{ title }} {{ releaseDate ? `(${new Date(releaseDate).getFullYear()})` : "" }}</strong></p>
      <br>
      <p :title="overview">{{ overview }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles to override external CSS classes */
.card {
  display: flex;
  cursor: pointer;
  height: 300px;
  width: 450px;
  padding: 0;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 0px #000000;
    transform: translate(6px, 6px);
  }
}

.card-thumbnail {
  height: auto;
  /* Matches tmdb poster dimensions */
  width: 197px;
}

.card-content {
  padding: var(--box-padding);
}
</style>
