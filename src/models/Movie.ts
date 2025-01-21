import ISO6391 from 'iso-639-1';
import { capitalize } from '@/lib/stringUtils';

/**
 * @typedef {Object} MovieOptions
 * @property {string} title
 * @property {string} posterPath
 * @property {string} tagline
 * @property {string[]} actors
 * @property {string[]} directors
 * @property {string[]} genres
 * @property {string[]} originCountries
 * @property {number} duration
 * @property {Date} releaseDate
 * @property {string} overview
 * @property {string} source
 * @property {string} resolution
 * @property {string} format
 * @property {string} videoCodec
 * @property {string} videoBitrate
 * @property {string} audioCodec
 * @property {string} audioBitrate
 * @property {string[]} audioLanguages
 * @property {string[]} subtitlesLanguages
 * @property {string} size
 */
export default class Movie {
  title?: string;
  posterPath?: string;
  tagline?: string;
  actors?: string[];
  directors?: string[];
  genres?: string[];
  originCountries?: string[];
  duration?: string;
  releaseDate?: Date;
  overview?: string;
  source?: string;
  resolution?: string;
  format?: string;
  videoCodec?: string;
  videoBitrate?: string;
  audioCodec?: string;
  audioBitrate?: string;
  audioLanguages?: string[];
  subtitlesLanguages?: string[];
  size?: string;

  /**
   * @returns {string}
   */
  getActors(): string {
    if (this.actors == undefined) {
      return 'No actor found';
    }
    return this.actors.join(', ');
  }

  /**
   * @param tmdbCast Input from TMDB API
   */
  setActors(tmdbCast: any[]) {
    this.actors = tmdbCast.filter((actor) => actor.known_for_department === 'Acting').sort((a, b) => b.popularity - a.popularity).slice(0, 10).map(actor => actor.name)
  }

  /**
   * @returns {string}
   */
  getDirectors(): string {
    if (this.directors == undefined) {
      return 'No director found';
    }
    return this.directors.join(', ');
  }

  /**
   * @param tmdbCrew Input from TMDB API
   */
  setDirectors(tmdbCrew: any[]) {
    this.directors = tmdbCrew.filter((crew) => crew.known_for_department === 'Directing').sort((a, b) => b.popularity - a.popularity).slice(0, 3).map(director => director.name)
  }

  /**
   * @returns {string}
   */
  getGenres(): string {
    if (this.genres == undefined) {
      return 'No genre found';
    }
    return this.genres.join(', ');
  }

  /**
   * @param locale Locale of the user
   * @returns {string} The first origin country not translated
   */
  getFirstOriginCountry(locale: string = navigator.language): string {
    if (this.originCountries == undefined) {
      return 'No origin country found';
    }
    return new Intl.DisplayNames([locale], { type: 'region', style: 'long' }).of(this.originCountries[0]);
  }

  /**
   * @returns {string} Source + Resolution = Quality
   */
  getQuality(): string {
    if (!this.source || !this.resolution) {
      return 'No quality found';
    }
    return `${this.source} ${this.resolution}`;
  }

  /**
   * @param locale Locale of the user
   * @returns {string} Audio languages separated by comma
   */
  getAudioLanguages(locale: string = navigator.language): string {
    if (!this.audioLanguages) {
      return 'No audio languages found';
    }
    const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
    return this.audioLanguages.map(lang => {
      const localeCode = ISO6391.getCode(lang);
      const translatedLang = localeCode ? displayNames.of(localeCode) : lang;
      return capitalize(translatedLang);
    }).join(', ');
  }

  /**
   * @param mediaInfoAudio Audio section from MediaInfo
   */
  setAudioLanguages(mediaInfoAudio: any[]) {
    this.audioLanguages = Array.from(new Set(mediaInfoAudio.map((audioInfo) => audioInfo.language)));
  }

  /**
   * @param locale Locale of the user
   * @returns {string} Subtitles languages separated by comma
   */
  getSubtitlesLanguages(locale: string = navigator.language): string {
    if (!this.subtitlesLanguages) {
      return 'No subtitles languages found';
    }
    const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
    return this.subtitlesLanguages.map(lang => {
      const localeCode = ISO6391.getCode(lang);
      const translatedLang = localeCode ? displayNames.of(localeCode) : lang;
      return capitalize(translatedLang);
    }).join(', ');
  }

  /**
   * @param mediaInfoText Text section from MediaInfo
   */
  setSubtitlesLanguages(mediaInfoText: any[]) {
    this.subtitlesLanguages = Array.from(new Set(mediaInfoText.map((textInfo) => textInfo.language)));
  }

  /**
   * @param locale Locale of the user
   * @returns {string}
   */
  getFormattedReleaseDate(locale: string = navigator.language): string {
    if (!this.releaseDate) {
      return 'No release date found';
    }
    return this.releaseDate.toLocaleDateString(locale);
  }

  /**
  * @returns {string}
  */
  getTagline(): string {
    if (!this.tagline) {
      return 'No tagline found';
    }
    return this.tagline;
  }

  /**
   * @returns {string}
   */
  getOverview(): string {
    if (!this.overview) {
      return 'No overview found';
    }
    return this.overview;
  }

  /**
   * @returns {string}
   */
  getDuration(): string {
    if (!this.duration) {
      return 'No duration found';
    }
    return this.duration;
  }

  /**
   * @returns {string}
   */
  getTitle(): string {
    if (!this.title) {
      return 'No title found';
    }
    return this.title;
  }

  /**
   * @returns {string}
   */
  getSize(): string {
    if (!this.size) {
      return 'No size found';
    }
    return this.size;
  }
}
