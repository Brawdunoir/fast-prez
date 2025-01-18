<script setup lang="ts">
defineProps(['movie'])
const templateLang = 'fr';
const regionNames = new Intl.DisplayNames([templateLang], { type: 'region', style: 'long' });

function translateRegion(region: string): string {
    return regionNames.of(region);
}
</script>

<template>
    <p>[center]<span v-if="movie.posterPath">[img]https://image.tmdb.org/t/p/w500{{ movie.posterPath }}[/img]</span></p>
    <p>[i]« {{ movie.tagline }} »[/i]</p>
    <br>
    [img]https://i.imgur.com/wSzdZc3.png[/img]
    <br>
    <p>[b]Titre original :[/b] {{ movie.title }}</p>
    <p>[b]Acteurs :[/b] {{ movie.getActors() }}</p>
    <p>[b]Réalisateurs :[/b] {{ movie.getDirectors() }} </p>
    <p>[b]Genre(s) :[/b] {{ movie.getGenres() }}</p>
    <p>[b]Nationalité :[/b] {{ translateRegion(movie.getFirstOriginCountry()) }}</p>
    <p>[b]Durée :[/b] {{ movie.duration }}</p>
    <p>[b]Date de sortie :[/b] {{ movie.getFormattedReleaseDate() }}</p>
    <br>
    [img]https://i.imgur.com/GhShVZp.png[/img]
    <br>
    <p>[i]{{ movie.overview }}[/i]</p>
    <br>
    [img]https://i.imgur.com/nAw0BeT.png[/img]
    <br>
    <p>[b]Qualité :[/b] {{ movie.getQuality() ?? 'MANQUANT' }} </p>
    <p>[b]Format :[/b] {{ movie.format ?? 'MANQUANT ex Matroska' }}</p>
    <p>[b]Codec Vidéo :[/b] {{ movie.videoCodec ?? 'MANQUANT ex "x264"' }}</p>
    <p>[b]Bitrate Vidéo :[/b] {{ movie.videoBitrate ?? 'MANQUANT ex 2 637 kb/s' }}</p>
    <p>[b]Codec Audio :[/b] {{ movie.audioCodec ?? 'MANQUANT ex "x264"' }}</p>
    <p>[b]Bitrate Audio :[/b] {{ movie.audioBitrate ?? 'MANQUANT ex 241 kb/s' }}</p>
    <p>[b]Langue(s) Audio :[/b] {{ movie.getAudioLanguages() }}</p>
    <p>[b]Sous-titre(s) :[/b] {{ movie.getSubtitles() }}</p>
    <br>
    [img]https://i.imgur.com/VCskFfz.png[/img]
    <br>
    <p>[b]Taille totale :[/b] {{ movie.size }}</p>
    <p>[b]Nombre de fichiers :[/b] MANQUANT[/center]</p>
</template>
