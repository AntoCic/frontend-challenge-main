<template>
    <div class="movie_card">
        <img :src="movie.img" alt="">
        <div class="info">
            <h4>{{ movie.title }}</h4>
            <p :class="ratingColor">{{ formattedVote }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    computed: {
        // Arrotonda il voto a una cifra decimale
        formattedVote() {
            return parseFloat(this.movie.vote).toFixed(1);
        },
        // Cambiare il colore in base al voto
        ratingColor() {
            if (this.movie.vote <= 4.9) {
                return 'red';
            } else if (this.movie.vote <= 7.5) {
                return 'yellow';
            } else {
                return 'green';
            }
        }
    }
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

    .info {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
        width: 100%;
        background: linear-gradient(to top, white, transparent);
        padding: 10px;
        color: black;
        text-align: center;


        h4,
        p {
            font-size: 1.1em;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 0;
        }

        p {
            border: 2px solid currentColor;
            padding: 0 6px;
            border-radius: 10px;
        }

        .red {
            color: red;
        }

        .yellow {
            color: yellow;
        }

        .green {
            color: green;
        }



    }
}
</style>