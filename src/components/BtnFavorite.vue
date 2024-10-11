<template>
    <span type="button" class="material-symbols-outlined favorite position-absolute top-0 end-0 mt-2 me-2"
        :class="[favorite ? 'fill text-danger animation-heart' : '']" @click.prevent="toggleFavorite()">
        favorite
    </span>
</template>

<script>
import { store } from '../store';
export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            store
        }
    },
    computed: {
        // Controlla se il film é tra i preferiti
        favorite() {
            return !!this.store.favoritesFilm[this.movie.id]
        }
    },

    methods: {
        // Aggiunge o rimuove il film dai preferiti
        toggleFavorite() {
            const favoriteMovie = { [this.movie.id]: this.movie }
            console.log(favoriteMovie);

            if (this.favorite) {
                // Rimuove il film dai preferiti
                delete this.store.favoritesFilm[this.movie.id]
            } else {
                // Aggiunge il film ai preferiti
                this.store.favoritesFilm[this.movie.id] = this.movie
            }

            // Aggiorna il localStorage con lo stato attuale dei preferiti
            localStorage.setItem('favorites', JSON.stringify(this.store.favoritesFilm));
        },
    }
}
</script>

<style lang="scss" scoped></style>