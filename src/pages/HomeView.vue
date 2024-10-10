<template>
  <div class="container">
    <div class="row justify-content-center" v-if="store.currentMovies">
      <div class="col-12">
        <h1>Best Movie</h1>
      </div>

      <div class="col-10 col-sm-6 col-md-4 col-lg-3 p-1" v-for="movie in store.currentMovies">
        <CmpMovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import CmpMovieCard from '../components/CmpMovieCard.vue';
export default {
  components: { CmpMovieCard },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped></style>