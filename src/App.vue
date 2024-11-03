<script setup>
import { ref, computed } from 'vue'
import { parseMediaInfo } from './lib/mediaInfoParser'
import { scrollToSection } from './lib/scrollToSection'
import { startOver } from './lib/startOver'
import { getMovieDetails } from './services/tmdb'
import TmdbList from './components/TmdbList.vue'
import TemplateBasic from './components/templates/TemplateBasic.vue'
import Presentation from './components/Presentation.vue'
import HeaderPage from './components/HeaderPage.vue'
import PresentationHelpers from './components/PresentationHelpers.vue'
import ManualMovieName from './components/ManualMovieName.vue'
import FooterPage from './components/FooterPage.vue'
import { parse } from '@brawdunoir/parse-torrent-filename/index.js'

const mediaInfo = ref('') // Input from textarea (nfo)
const manualMovieTitle = ref('') // Manual input from user
const movieSelectedDetails = ref(null) // Movie details grabbed from TMDB whenever a movie has been selected

// Computed properties from mediaInfo to have a js object to work with
const parsedInfo = computed(() => {
  if (!mediaInfo.value) return null
  return parseMediaInfo(mediaInfo.value)
})

// Computed property to get the movie title from the mediaInfo/manualMovieTitle
const movieTitle = computed(() => {
  if (manualMovieTitle.value) return manualMovieTitle.value
  if (!parsedInfo.value) return ''
  // Extract only the movie name before the year or quality indicators
  const movieTitle = parse(parsedInfo.value.general.complete_name).title
  return movieTitle
})

function setManualMovieTitle(title) {
  manualMovieTitle.value = title.value
}

async function fetchMovieDetails(movie) {
  movieSelectedDetails.value = await getMovieDetails(movie.id)
  await new Promise(resolve => setTimeout(resolve, 100)) // Give time for DOM update
  scrollToSection('movie-presentation')
}
</script>

<template>
  <HeaderPage/>
  <div class="main-container">
    <h1 id="first-section">{{ $t('app.mediaInfoTitle')}}</h1>
    <textarea v-model="mediaInfo" :placeholder="$t('app.mediaInfoTextAreaPlaceholder')"></textarea>
    <ManualMovieName @movie-title="setManualMovieTitle"/>

    <div v-if="movieTitle">
      <h1>{{ $t('app.tmdbResultsTitle', { title: movieTitle }) }}</h1>
      <TmdbList @movie="fetchMovieDetails" :movie-title="movieTitle"/>
    </div>

    <div id="movie-presentation" v-if="movieSelectedDetails">
      <h1>{{ $t('app.presentationTitle') }}</h1>
      <div class="presentation-container">
        <Presentation :parsed-info="parsedInfo" :movie-details="movieSelectedDetails">
          <TemplateBasic :parsed-info="parsedInfo" :movie-details="movieSelectedDetails"></TemplateBasic>
        </Presentation>
        <PresentationHelpers/>
      </div>
    <button @click="startOver" style="width: 100%;">{{ $t('app.reload') }}</button>
    </div>
  </div>
  <FooterPage/>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 450px;
}

.presentation-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--margin-bottom);
}
</style>
