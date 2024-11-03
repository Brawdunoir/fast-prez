import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  messages: {
    en: {
      app: {
        mediaInfoTitle: 'Movie Info',
        mediaInfoTextAreaPlaceholder: 'Paste your NFO here',
        tmdbResultsTitle: 'Search results for "{title}" movie',
        presentationTitle: 'Movie presentation',
        reload: 'Start over',
      },
      wip: 'Work in progress 🚧',
      manualMovieName: {
        description: 'Or enter the movie name manually',
        inputPlaceholder: 'Movie name',
      }
    },
    fr: {
      app: {
        mediaInfoTitle: 'Information du film',
        mediaInfoTextAreaPlaceholder: 'Coller le NFO ici',
        tmdbResultsTitle: 'Résultats de recherche pour le film "{title}"',
        presentationTitle: 'Présentation du film',
        reload: 'Générer une nouvelle présentation',
      },
      wip: 'En chantier 🚧',
      manualMovieName: {
        description: 'Ou entrer le nom du film manuellement',
        inputPlaceholder: 'Nom du film',
      }
    }
  }
})


const app = createApp(App)
app.use(i18n)
app.mount('#app')
