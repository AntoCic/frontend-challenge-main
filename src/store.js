import { reactive } from 'vue'
import axios from 'axios'
import countries from './countries'

export const store = reactive({
    TMDB_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmJhNWJjY2ZlZDVkMjkwOTQ5ZTRlOTI0NzI3YWIwYiIsIm5iZiI6MTcyNDc2OTU3NS45MTUxODksInN1YiI6IjY2MWUzMzFiYTZmZGFhMDE2MzZhMzA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9siXx7K_Jt3NXRjJPJUFUcl2eXgud3Xgc3BTspbl188',
    currentMovies: null,
    currentPage: 1,
    totalPages: null,

    favoritesFilm: null,

    lastCall: null,

    homeTitle: 'Best Movie',

    genres: [
        {
            "id": 0,
            "name": "Popolari"
        },
        {
            "id": 28,
            "name": "Azione"
        },
        {
            "id": 12,
            "name": "Avventura"
        },
        {
            "id": 16,
            "name": "Animazione"
        },
        {
            "id": 35,
            "name": "Commedia"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentario"
        },
        {
            "id": 18,
            "name": "Dramma"
        },
        {
            "id": 10751,
            "name": "Famiglia"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "Storia"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Musica"
        },
        {
            "id": 9648,
            "name": "Mistero"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Fantascienza"
        },
        {
            "id": 10770,
            "name": "TV"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "Guerra"
        },
        {
            "id": 37,
            "name": "Western"
        }

    ],

    countries,

    async start() {
        // Controlla i film preferiti nel localStorage
        this.favoritesFilm = JSON.parse(localStorage.getItem('favorites')) || {};


        // Ho riatardato la chiamata cosi si può vedere il loader.
        this.loading.on()
        setTimeout(async () => {
            await this.callAPI()
        }, 2000);
    },

    async callAPI(action = 'discover/movie', params = { language: 'it_IT', sort_by: 'popularity.desc' }, advancedSearch = null) {
        this.loading.on()

        if (advancedSearch) {
            this.lastCall = null
            this.currentMovies = []
            while (this.currentMovies.length <= 40 && this.currentPage !== this.totalPages) {
                if (params.page) {
                    params.page++
                } else {
                    params.page = 1
                }
                await axios.get(`https://api.themoviedb.org/3/${action}`, {
                    params,
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer ' + this.TMDB_KEY
                    }
                })
                    .then((res) => {
                        if (res.data.results && res.data.results.length > 0) {
                            res.data.results.forEach(movie => {
                                const checkGenre = advancedSearch.genre ? movie.genre_ids.includes(advancedSearch.genre) : true;
                                const checkLanguage = advancedSearch.language ? movie.original_language === advancedSearch.language : true;
                                if (movie.backdrop_path && movie.poster_path && checkGenre && checkLanguage) {
                                    this.currentMovies.push(new Movie(movie))
                                }
                            });
                        }
                        this.currentPage = res.data.page
                        this.totalPages = res.data.total_pages
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            if (this.currentPage === this.totalPages) {
                this.currentPage = 1
                this.totalPages = null
            }
            this.loading.off()
            // console.log(this.currentMovies);
            return this.currentMovies

        } else {
            this.lastCall = { action, params }
            return await axios.get(`https://api.themoviedb.org/3/${action}`, {
                params,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + this.TMDB_KEY
                }
            })
                .then((res) => {
                    if (res.data.results && res.data.results.length > 0) {
                        const parsedData = []
                        res.data.results.forEach(movie => {
                            if (movie.backdrop_path && movie.poster_path) {
                                parsedData.push(new Movie(movie))
                            }
                        });
                        res.data.results = parsedData
                    }
                    this.currentMovies = res.data.results
                    this.currentPage = res.data.page
                    this.totalPages = res.data.total_pages

                    this.loading.off()
                    return res.data
                })
                .catch((err) => {
                    this.loading.off()
                    return err
                });
        }
    },

    newMovieFromMovie(movie) {
        return new Movie(movie);
    },

    loading: {
        state: false,
        msg: "",

        defaultMsg: [
            "Popcorn pronti? Il tuo film sta per iniziare!",
            "Prendi posto, l'azione sta per partire!",
            "Ci siamo quasi... preparati a una maratona di emozioni!",
            "Abbiamo acceso il proiettore, solo un attimo!",
            "Caricando scene epiche e colpi di scena!",
            "Silenzio in sala... il film sta arrivando!",
            "Niente spoiler, ma stai per vedere qualcosa di speciale!",
            "Una trama avvincente è in arrivo, stai pronto!",
            "Prepara i popcorn... siamo ai titoli di testa!",
            "L’azione inizia tra pochi secondi... mantieni la calma!"
        ],

        on(msg = null) {
            this.msg = msg ?? this.defaultMsg[Math.floor(Math.random() * this.defaultMsg.length)];
            this.state = true
        },
        off() { this.state = false },
    },


})

class Movie {
    constructor(movie) {
        this.id = movie.id.toString()
        this.title = movie.title
        this.adult = movie.adult
        this.img = movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : movie.img
        this.poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : movie.poster
        this.plot = movie.overview ?? movie.plot
        this.popularity = movie.popularity
        this.release_date = new Date(movie.release_date)
        this.vote = movie.vote_average ? parseFloat(movie.vote_average).toFixed(1) : movie.vote ?? 0
        this.ratingColor = this.vote <= 7.5 ? this.vote <= 4.9 ? '#ff0000' : '#ffff00' : '#008000'
        this.genre_ids = movie.genre_ids
        this.original_language = movie.original_language ? typeof (movie.original_language) === 'object' ? movie.original_language : countries[movie.original_language] : null
    }

    genre() {
        return this.genre_ids
            .map(id => store.genres.find(genre => genre.id === id).name)
            .join(', ') + '.';
    }

}