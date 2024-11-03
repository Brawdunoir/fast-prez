<script setup>
defineProps(['parsedInfo', 'movieDetails'])
const regionNamesFr = new Intl.DisplayNames(['fr'], { type: 'region' });

</script>

<template>
    <p>[center]<span v-if="movieDetails.poster_path">[img]https://image.tmdb.org/t/p/w500{{ movieDetails.poster_path }}[/img]</span></p>
    <p>[i]« {{ movieDetails.tagline }} »[/i]</p>
    <br>
    <p>[b]Titre original :[/b] {{ movieDetails.title }}</p>
    <p>[b]Acteurs :[/b] {{ movieDetails.credits.cast.filter(person => person.known_for_department === "Acting")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10)
      .map(actor => actor.name)
      .join(', ') }}</p>
    <p>[b]Réalisateurs :[/b] {{ movieDetails.credits.crew.filter(person => person.job === "Producer")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3)
      .map(producer => producer.name)
      .join(', ') }} </p>
    <p>[b]Genre(s) :[/b] {{ movieDetails.genres.map(genre => genre.name).join(', ') }}</p>
    <p>[b]Nationalité :[/b] {{ regionNamesFr.of(movieDetails.origin_country[0]) }}</p>
    <p>[b]Durée :[/b] {{ parsedInfo?.general.duration }}</p>
    <p>[b]Date de sortie :[/b] {{ new Date(movieDetails.release_date).toLocaleDateString('fr-FR', {}) }}</p>
    <br>
    <p>[i]{{ movieDetails.overview }}[/i]</p>
    <br>
    <p>[b]Qualité :[/b] MANQUANT, ex "BluRay 1080p" </p>
    <p>[b]Format :[/b] {{ parsedInfo?.general.format ?? 'MANQUANT ex Matroska' }}</p>
    <p>[b]Codec Vidéo :[/b] MANQUANT ex "x264"</p>
    <p>[b]Bitrate Vidéo :[/b] {{ parsedInfo?.video[0].bit_rate ?? 'MANQUANT ex 2 637 kb/s' }}</p>
    <p>[b]Codec Audio :[/b] MANQUANT ex "x264"</p>
    <p>[b]Bitrate Audio :[/b] {{ parsedInfo?.audio[0].bit_rate ?? 'MANQUANT ex 241 kb/s' }}</p>
    <p>[b]Langue(s) Audio :[/b] {{ [...new Set(parsedInfo?.audio.map(audio => audio.language))].join(', ') }}</p>
    <p>[b]Sous-titre(s) :[/b] {{ [...new Set(parsedInfo?.text.map(text => text.language))].join(', ') }}</p>
    <br>
    <p>[b]Taille totale :[/b] {{ parsedInfo?.general.file_size }}</p>
    <p>[b]Nombre de fichiers :[/b] MANQUANT[/center]</p>
</template>

<!-- [center][img]<https://image.tmdb.org/t/p/w500/1EVLfm72B3xwY0zhfdRrfwDn5MW.jpg[/img>]

[b]Titre original :[/b] Un singe en hiver
[b]Acteurs :[/b] Jean Gabin, Jean-Paul Belmondo, Suzanne Flon, Noël Roquevert, Paul Frankeur, Gabrielle Dorziat, Marcelle Arnold, Hella Petri, Lucien Raimbourg, Geneviève Fontanel, Sylviane Margollé, Camille Guérini, Charles Bouillaud, Anne-Marie Coffinet
[b]Réalisateur :[/b] Henri Verneuil
[b]Genre :[/b] Drame, Comédie
[b]Nationalité :[/b] France
[b]Durée :[/b] 1h 45min
[b]Date de sortie :[/b] 11 Mai 1962

[i]L'hôtelier d'une petite station balnéaire de Normandie a juré à sa femme de ne plus toucher à un verre d'alcool. C'était sans compter avec l'arrivée de Fouquet qui surgit avec la tentation.[/i]

[b]Qualité :[/b] HDLight 1080p
[b]Format :[/b] MKV
[b]Codec Vidéo :[/b] x264
[b]Bitrate Vidéo :[/b] 8 188 Kb/s
[b]Codec Audio :[/b] DTS
[b]Bitrate Audio :[/b] 384 Kb/s
[b]Langues :[/b] Francais
[b]Sous-titre :[/b] Aucun

[b]Taille totale :[/b] 3.68GiB
[b]Nombre de fichiers :[/b] 1[/center] -->
