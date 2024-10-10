<template>
  <header>
    <div class="container">
      <nav class="row align-items-center my-1">
        <div class="col">
          <RouterLink to="/">
            <img src="/img/logo.png" class="logo align-text-top rounded" alt="Vue logo" />
          </RouterLink>
        </div>
        <div class="col-auto">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="cerca film" v-model="query">
            <button class="btn btn-outline-light" type="button" @click="search()">
              <span class="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </div>
        <div class="col-12">
          <p type="button" class="mb-0 small text-end" @click="isOpenAdvancedSearch = !isOpenAdvancedSearch">ricerca
            avanzata &#11206;</p>
        </div>

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
              <option selected :value="null">Lingua</option>
              <option v-for="(countrie, key) in store.countries" :key="key" :value="countrie.languages" class="f-emoji">
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
    }
  },
  computed: {
  },
  methods: {
    search() {
      this.resetSearc();
    },
    resetSearc() {
      this.query = '';
      this.genre = null;
      this.language = null;
    }
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