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
            <!-- input cerca -->
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
            <!-- btn Lista preferiti -->
            <span @click="showFavoriteList()" class="me-2">Lista preferiti </span>
            <!-- btn ricerca avanzata -->
            <span @click="toogleAdvancedSearch()">Ricerca avanzata {{ isOpenAdvancedSearch ? '&blacktriangle;' :
              '&blacktriangledown;' }}</span>
          </p>
        </div>

        <!-- Ricerca avanzata -->
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

      // salva la ricerca in una stringa per evitare di ripeterla
      easySearch: '',
    }
  },
  watch: {
    // Osserva le modifiche dell'input cerca
    query(newQuery, oldQuery) {
      if (newQuery !== oldQuery) {
        this.search(); // Chiama il metodo 'search' per eseguire la ricerca
        this.easySearch = this.query + this.genre + this.language // Salva i parametri di ricerca in una stringa unica per evitare di cercare piú volte la stessa cosa
      }
    }
  },
  methods: {

    // Metodo per eseguire la ricerca
    search() {

      if (this.query !== '') {
        const newEasySearch = this.query + this.genre + this.language; // Salva i parametri di ricerca in una stringa unica per evitare di cercare piú volte la stessa cosa

        // Se la ricerca è cambiata, aggiorna 'easySearch'
        if (this.easySearch !== newEasySearch) {
          this.easySearch = newEasySearch;

          // Imposta il titolo della home con il valore della query
          this.store.homeTitle = `"${this.query}"`;

          const params = {
            query: this.query,
          };

          // Se la ricerca avanzata è aperta e sono stati selezionati genere o lingua
          if (this.isOpenAdvancedSearch && (this.genre !== null || this.language)) {
            const advancedSearch = {};

            if (this.genre !== null) {
              advancedSearch.genre = this.genre;
            }

            if (this.language) {
              advancedSearch.language = this.language;
            }

            // Esegui la chiamata API con i parametri e la ricerca avanzata
            this.store.callAPI('search/movie', params, advancedSearch);
          } else {
            // Esegui la chiamata API con solo il testo inserito nell'input cerca
            this.store.callAPI('search/movie', params);
          }
        }
      } else {
        // Se la query è vuota, resetta la ricerca
        this.resetSearc();
      }

      // Aggiorna il percorso router per reindirizzare alla home
      this.$router.push({ name: 'home' });
    },

    // Metodo per aprire/chiudere la ricerca avanzata
    toogleAdvancedSearch() {
      this.isOpenAdvancedSearch = !this.isOpenAdvancedSearch;

      // Se la ricerca avanzata viene chiusa, resetta genere e lingua
      if (!this.isOpenAdvancedSearch) {
        this.genre = null;
        this.language = null;
      }
    },

    // Metodo eseguito al click sul logo
    handleLogoClick() {
      // Se siamo già sulla pagina 'home', resetta la ricerca
      if (this.$route.name === 'home') {
        this.resetSearc();
      }
    },

    // Metodo per resettare la ricerca
    resetSearc() {
      this.store.callAPI();
      this.store.homeTitle = `Best Movie`;
      this.query = '';
      this.genre = null;
      this.language = null;
    },

    // Metodo per mostrare la lista dei film preferiti
    showFavoriteList() {
      this.store.homeTitle = `Preferiti`;
      this.query = '';
      this.genre = null;
      this.language = null;
      this.store.lastCall = null;

      // Recupera i film preferiti dalla store
      this.store.currentMovies = Object.values(this.store.favoritesFilm);

      // Converte i film preferiti in oggetti Movie
      this.store.currentMovies = this.store.currentMovies.map(e => this.store.newMovieFromMovie(e));

      // Se non siamo già nella home, reindirizza alla home
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