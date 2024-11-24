<script setup>
import { ref, watchEffect } from 'vue'
import { searchMovie } from '@/services/tmdb';
import MediaResult from './MediaResult.vue';

const emit = defineEmits(['movie'])

function clickOnMovie(movie) {
  movieSelected.value = movie
  emit('movie', movie)
}

const { movieTitle } = defineProps({
  movieTitle: {
    type: String,
    required: true
  }
})

// Define a ref to hold the movie results
const movieResults = ref(null)
const movieSelected = ref(null)


// Use watchEffect to reactively fetch movie results whenever movieTitle changes
watchEffect(async () => {
  if (!movieTitle) {
    movieResults.value = null
    return
  }

  // Fetch and assign the movie results
  movieResults.value = await searchMovie(movieTitle)
})
</script>

<template>
  <div class="container">
    <div v-for="movie in movieResults" :key="movie.id">
      <MediaResult @click="clickOnMovie(movie)" :class="[movieSelected?.id === movie.id ? 'selected' : '']"
        :title="movie.title" :releaseDate="movie.release_date" :posterPath="movie.poster_path"
        :voteAverage="movie.vote_average" :overview="movie.overview" />
    </div>
  </div>
</template>

<style scoped>
.selected {
  background-color: var(--secondary-color);
}

.container {
  display: flex;
  gap: var(--margin-bottom);
  width: 100%;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  width: var(--box-padding);
}

::-webkit-scrollbar-track {
  border: var(--border-thickness) solid var(--border-color);
}

::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
}
</style>
