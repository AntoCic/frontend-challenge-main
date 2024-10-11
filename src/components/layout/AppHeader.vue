<template>
  <header>
    <div class="container">
      <nav class="row align-items-center my-1">
        <div class="col">
          <RouterLink to="/">
            <img src="/img/logo.png" class="logo align-text-top rounded" alt="Vue logo" @click="handleLogoClick()" />
          </RouterLink>
        </div>
        <!-- Searchbar -->
        <div class="col-auto">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="cerca film" v-model.lazy.trim="query"
              @keyup.enter="search()">
            <button class="btn btn-outline-light" type="button" @click="search()">
              <span class="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </div>
        <div class="col-12">
          <p type="button" class="mb-0 small text-end">
            <span @click="showFavoriteList()" class="me-2">Lista preferiti </span>
            <span @click="toogleAdvancedSearch()">Ricerca avanzata {{ isOpenAdvancedSearch ? '&blacktriangle;' :
              '&blacktriangledown;' }}</span>
          </p>
        </div>

        <!-- AdvancedSearch -->
        <template v-if="isOpenAdvancedSearch">
          <div class="col"></div>
          <div class="col-auto pe-0">
            <select class="form-select form-select-sm" v-model="genre">
              <option selected :value="null">Genere</option> genres
              <option v-for="(e_genre, key) in store.genres" :key="key + '_genre'" :value="e_genre.id" class="f-emoji">
                {{ e_genre.name }}</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select form-select-sm" v-model="language">
              <option selected :value="null">Lingua Originale</option>
              <option v-for="(countrie, key) in store.countries" :key="key" :value="key" class="f-emoji">
                {{ countrie.emoji }}</option>
            </select>
          </div>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from '../../store';
export default {
  data() {
    return {
      store,

      query: '',
      genre: null,
      language: null,

      isOpenAdvancedSearch: false,
      easySearch: '',
    }
  },
  watch: {
    query(newQuery, oldQuery) {
      if (newQuery !== oldQuery) {
        this.search();
        this.easySearch = this.query + this.genre + this.language
      }
    }
  },
  methods: {
    search() {
      if (this.query !== '') {
        const newEasySearch = this.query + this.genre + this.language
        if (this.easySearch !== newEasySearch) {
          this.easySearch = newEasySearch

          this.store.homeTitle = `"${this.query}"`

          const params = {
            query: this.query,
          }

          if (this.isOpenAdvancedSearch && (this.genre !== null || this.language)) {
            const advancedSearch = {}
            if (this.genre !== null) {
              advancedSearch.genre = this.genre
            }

            if (this.language) {
              advancedSearch.language = this.language
            }

            this.store.callAPI('search/movie', params, advancedSearch)
          } else {
            this.store.callAPI('search/movie', params)
          }

        }

      } else {
        this.resetSearc()
      }
      this.$router.push({ name: 'home' });
    },

    toogleAdvancedSearch() {
      this.isOpenAdvancedSearch = !this.isOpenAdvancedSearch
      if (!this.isOpenAdvancedSearch) {
        this.genre = null;
        this.language = null;
      }
    },
    handleLogoClick() {
      if (this.$route.name === 'home') {
        this.resetSearc();
      }
    },
    resetSearc() {
      this.store.callAPI()
      this.store.homeTitle = `Best Movie`
      this.query = '';
      this.genre = null;
      this.language = null;
    },

    showFavoriteList() {
      this.store.homeTitle = `Preferiti`
      this.query = '';
      this.genre = null;
      this.language = null;
      this.store.lastCall = null

      this.store.currentMovies = Object.values(this.store.favoritesFilm)
      this.store.currentMovies = this.store.currentMovies.map(e => this.store.newMovieFromMovie(e))

      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' });
      }

    },
  },
}
</script>


<style lang="scss" scoped>
.logo {
  width: 70px;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #ffffff);
}
</style>