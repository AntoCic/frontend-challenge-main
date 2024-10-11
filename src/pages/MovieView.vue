<template>
  <div class="container" v-if="movie">
    <div class="row align-items-center">
      <div class="col-12 position-relative">
        <img :src="movie.img" class="w-100 rounded-top" alt="">
        <BtnFavorite :movie="movie" class="me-3" />
      </div>
      <div class="col">
        <h1 class="border-bottom">{{ movie.title }}</h1>
        <p v-if="movie.genre_ids.length > 0" class="mb-0">
          <span v-if="movie.original_language" class="mb-0 f-emoji">{{ movie.original_language.emoji }}</span>
          {{ movie.genre() }}
        </p>
        <p v-if="movie.release_date">Data di rilascio: {{ movie.release_date.toLocaleDateString() }}</p>
      </div>
      <div class="col-auto">
        <CmpVote :id="movie.id" :vote="Number(movie.vote)" :color="movie.ratingColor" />
      </div>
      <div v-if="movie.plot" class="col-12 bg-light bg-opacity-25 p-3 rounded">
        <h5 class="mb-0">Trama</h5>
        <p class="mb-0">{{ movie.plot }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import { store } from '../store';
import BtnFavorite from '../components/BtnFavorite.vue';
import CmpVote from '../components/CmpVote.vue';
export default {
  components: { BtnFavorite, CmpVote },
  props: {
    id: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    movie() {
      if (this.store.currentMovies) {
        const movie = this.store.currentMovies.find(movie => movie.id === this.id);
        if (movie) { return movie; }
      }
      this.$router.push({ name: 'home' });
      return null;
    }
  },
}
</script>

<style lang="scss" scoped></style>