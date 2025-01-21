import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'fr',
  messages: {
    en: {
      app: {
        catchPhrase: 'Create torrent presentations in a breeze!',
        mediaInfoTitle: 'Step 1: Paste NFO',
        mediaInfoSubtitle: "The movie title will be extracted from the NFO",
        mediaInfoTextAreaPlaceholder: 'Paste your NFO here',
        noResults: 'No results found, try typing the movie name manually',
        tmdbResultsTitle: 'Step 2: Select your movie',
        tmdbResultsSubtitle: 'You can scroll using the mouse',
        tmdbSkipButton: 'Skip to template',
        presentationTitle: 'Step 3: Complete the presentation if needed',
        presentationSubtitle: 'And the show is on!',
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
        catchPhrase: 'Créez des présentations de torrent en un rien de temps !',
        mediaInfoTitle: 'Étape 1 : Coller le NFO',
        mediaInfoSubtitle: "Le titre du film sera extrait du NFO, sinon vous pouvez le saisir manuellement",
        mediaInfoTextAreaPlaceholder: 'Coller le NFO ici',
        noResults: 'Aucun résultat trouvé, essayez de saisir le nom du film manuellement',
        tmdbResultsTitle: 'Étape 2 : Sélectionner votre film',
        tmdbResultsSubtitle: 'Vous pouvez scroller avec la souris',
        tmdbSkipButton: 'Passer au modèle',
        presentationTitle: 'Étape 3 : Compléter la présentation si besoin',
        presentationSubtitle: 'Et le tour est joué !',
        reload: 'Recommencer',
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
