
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
 * @property {string[]} subtitles
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
  duration?: number;
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
  subtitles?: string[];
  size?: string;

  /**
   * @returns {string}
   */
  getActors(): string {
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
    return this.genres.join(', ');
  }

  /**
   * @returns {string} The first origin country not translated
   */
  getFirstOriginCountry(): string {
    return this.originCountries[0];
  }

  /**
   * @returns {string} Source + Resolution = Quality
   */
  getQuality(): string {
    if (this.source && this.resolution) {
      return `${this.source} ${this.resolution}`;
    }
    return undefined;
  }

  /**
   * @returns {string}
   */
  getAudioLanguages(): string {
    if (!this.audioLanguages) {
      return 'No audio';
    }
    return this.audioLanguages.join(', ');
  }

  /**
   *
   * @param mediaInfoAudio Audio section from MediaInfo
   */
  setAudioLanguages(mediaInfoAudio: any[]) {
    this.audioLanguages = Array.from(new Set(mediaInfoAudio.map((audioInfo) => audioInfo.language)));
  }

  /**
   *
   * @returns {string}
   */
  getSubtitles(): string {
    if (!this.subtitles) {
      return 'No subtitles';
    }
    return this.subtitles.join(', ');
  }

  /**
   *
   * @param mediaInfoText Text section from MediaInfo
   */
  setSubtitles(mediaInfoText: any[]) {
    this.subtitles = Array.from(new Set(mediaInfoText.map((textInfo) => textInfo.language)));
  }
}
