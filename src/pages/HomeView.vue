<template>
  <div class="container">
    <div class="row justify-content-center" v-if="store.currentMovies">
      <div class="col-12">
        <h2>{{ store.homeTitle }}</h2>
      </div>
      <template v-if="store.currentMovies.length > 0">
        <RouterLink :to="{ name: 'movie', params: { id: movie.id } }" class="col-10 col-sm-6 col-md-4 col-lg-3 g-4"
          v-for="movie in store.currentMovies">
          <CmpMovieCard :movie="movie" />
        </RouterLink>
      </template>
      <p v-else class="text-center">La ricerca non ha dato risultati</p>
      <div class="col-12" v-if="this.store.lastCall">
        <CmpPagination />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import CmpMovieCard from '../components/CmpMovieCard.vue';
import CmpPagination from '../components/CmpPagination.vue';
export default {
  components: { CmpMovieCard, CmpPagination },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped></style>