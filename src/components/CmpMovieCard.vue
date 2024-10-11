<template>
    <div class="movie_card">
        <img :src="movie.poster" alt="">
        <CmpVote :id="movie.id" :vote="Number(movie.vote)" :color="movie.ratingColor" class="vote" />
        <BtnFavorite :movie="movie" />
    </div>
</template>

<script>
import BtnFavorite from './BtnFavorite.vue';
import CmpVote from './CmpVote.vue';
export default {
    components: { BtnFavorite, CmpVote },
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

    .vote {
        position: absolute !important;
        bottom: 6px;
        right: 6px;
    }
}
</style>