<template>
    <div class="movie_card">
        <img :src="movie.poster" alt="">
        <p :style="`color: ${movie.ratingColor};`">{{ movie.vote }}</p>
        <BtnFavorite :movie="movie" />
    </div>
</template>

<script>
import BtnFavorite from './BtnFavorite.vue';
export default {
    components: { BtnFavorite },
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.movie_card {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    p {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 0;
        border: 2px solid currentColor;
        padding: 0 6px;
        border-radius: 10px;

        position: absolute;
        bottom: 6px;
        right: 6px;
        background-color: rgba(77, 75, 75, 0.5);
    }
}
</style>