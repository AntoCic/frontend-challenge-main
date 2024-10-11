<template>
  <div class="container" v-if="movie">
    <div class="row align-items-center">
      <div class="col-12 position-relative">
        <img :src="movie.img" class="w-100" alt="">
        <BtnFavorite :isFavorite="favorite" class="me-3" />
      </div>
      <div class="col">
        <h1>{{ movie.title }}</h1>
        <p v-if="movie.genre_ids.length > 0" class="mb-0">{{ movie.genre() }}</p>
        <p v-if="movie.release_date">Data di rilascio: {{ movie.release_date.toLocaleDateString() }}</p>
      </div>
      <div class="col-auto">
        <p class="mb-0" :style="`color: ${movie.ratingColor};`">{{ movie.vote }}</p>
      </div>
      <div class="col-auto">
        <p v-if="movie.original_language" class="mb-0 f-emoji">{{ movie.original_language.emoji }}</p>
      </div>
      <div class="col-12">
        <p v-if="movie.plot">{{ movie.plot }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import { store } from '../store';
import BtnFavorite from '../components/BtnFavorite.vue';
export default {
  components: { BtnFavorite },
  props: {
    id: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      store,
      favorite: false
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