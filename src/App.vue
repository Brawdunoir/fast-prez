<script setup>
import { ref, watch } from 'vue'
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
import Movie from './models/Movie';


const mediaInfo = ref('') // Input from textarea (nfo)
const isMovieSelected = ref(false) // Were movie details grabbed from TMDB ?

const movie = ref(new Movie())

watch(mediaInfo, async (newMediaInfo) => {
  const parsedMediaInfo = parseMediaInfo(newMediaInfo)
  if (!parsedMediaInfo.general.complete_name) return
  const parsedTitle = parse(parsedMediaInfo.general.complete_name)
  if (!parsedTitle.title) return
  const media = movie.value
  media.title = parsedTitle.title
  media.duration = parsedMediaInfo.general.duration
  media.format = parsedMediaInfo.general.format
  media.videoBitrate = parsedMediaInfo.video[0].bit_rate
  media.audioBitrate = parsedMediaInfo.audio[0].bit_rate
  media.size = parsedMediaInfo.general.file_size
  media.source = parsedTitle.source
  media.resolution = parsedTitle.resolution
  media.videoCodec = parsedTitle.codec
  media.audioCodec = parsedTitle.codec // Not sure if it's the right one
  media.setAudioLanguages(parsedMediaInfo.audio)
  media.setSubtitles(parsedMediaInfo.text)
})

function setManualMovieTitle(title) {
  movie.value.title = title.value
}

async function fetchMovieDetails(movieSelected) {
  const movieDetails = await getMovieDetails(movieSelected.id)
  const media = movie.value
  media.posterPath = movieDetails.poster_path
  media.tagline = movieDetails.tagline
  media.overview = movieDetails.overview
  media.title = movieDetails.title
  media.setActors(movieDetails.credits.cast)
  media.setDirectors(movieDetails.credits.crew)
  media.releaseDate = new Date(movieDetails.release_date)
  media.genres = movieDetails.genres.map(genre => genre.name)
  media.originCountries = movieDetails.origin_country

  isMovieSelected.value = true
  await new Promise(resolve => setTimeout(resolve, 100)) // Give time for DOM update
  scrollToSection('movie-presentation')
}
</script>

<template>
  <HeaderPage />
  <div class="main-container">
    <h1 id="first-section">{{ $t('app.mediaInfoTitle') }}</h1>
    <textarea v-model="mediaInfo" :placeholder="$t('app.mediaInfoTextAreaPlaceholder')"></textarea>
    <ManualMovieName @movie-title="setManualMovieTitle" />

    <div v-if="movie.title">
      <h1>{{ $t('app.tmdbResultsTitle', { title: movie.title }) }}</h1>
      <TmdbList @movie="fetchMovieDetails" :movie-title="movie.title" />
    </div>

    <div id="movie-presentation" v-if="isMovieSelected">
      <h1>{{ $t('app.presentationTitle') }}</h1>
      <div class="presentation-container">
        <Presentation>
          <TemplateBasic :movie />
        </Presentation>
        <PresentationHelpers />
      </div>
      <button @click="startOver" style="width: 100%;">{{ $t('app.reload') }}</button>
    </div>
  </div>
  <FooterPage />
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
