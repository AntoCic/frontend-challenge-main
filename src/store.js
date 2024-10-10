import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    TMDB_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmJhNWJjY2ZlZDVkMjkwOTQ5ZTRlOTI0NzI3YWIwYiIsIm5iZiI6MTcyNDc2OTU3NS45MTUxODksInN1YiI6IjY2MWUzMzFiYTZmZGFhMDE2MzZhMzA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9siXx7K_Jt3NXRjJPJUFUcl2eXgud3Xgc3BTspbl188',
    currentMovies: null,
    currentPage: null,
    totalPages: null,

    async start() {
        // Ho riatardato la chiamata cosi si può vedere il loader.
        this.loading.on()
        setTimeout(async () => {
            const resApi = await this.callAPI()
            console.log(resApi);
            this.currentMovies = resApi.results
            this.currentPage = resApi.page
            this.totalPages = resApi.total_pages
        }, 500);


    },

    async callAPI(action = 'discover/movie', params = { language: 'it_IT', sort_by: 'popularity.desc' }, query = '') {
        this.loading.on()
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
                        parsedData.push(new Movie(movie))
                    });
                    res.data.results = parsedData
                }
                this.loading.off()
                return res.data
            })
            .catch((err) => {
                this.loading.off()
                return err
            });

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
    }
})

class Movie {
    constructor(movie) {
        this.id = movie.id
        this.title = movie.title
        this.adult = movie.adult
        this.img = `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`
        this.poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        this.plot = movie.overview
        this.popularity = movie.popularity
        this.release_date = movie.first_air_date
        this.vote = movie.vote_average
        this.genre_ids = movie.genre_ids
        this.original_language = movie.original_language
    }
}