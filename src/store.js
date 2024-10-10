import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    TMDB_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmJhNWJjY2ZlZDVkMjkwOTQ5ZTRlOTI0NzI3YWIwYiIsIm5iZiI6MTcyNDc2OTU3NS45MTUxODksInN1YiI6IjY2MWUzMzFiYTZmZGFhMDE2MzZhMzA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9siXx7K_Jt3NXRjJPJUFUcl2eXgud3Xgc3BTspbl188',

    async start() {
        console.log(await this.callAPI());

    },

    async callAPI(action = 'discover/movie', params = { language: 'it_IT', sort_by: 'popularity.desc' }, query = '') {

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
                return res.data
            })
            .catch((err) => {
                return err
            });

    },

    loading: {
        state: true,
        msg: "working on it...",
        on(msg = "Loading...") {
            this.msg = msg
            this.state = true
        },
        off() { this.state = false },
    }
})

class Movie {
    constructor(movie) {
        this.id = movie.id
        this.adult = movie.title
        this.img = movie.backdrop_path
        this.poster = movie.poster_path
        this.plot = movie.overview
        this.popularity = movie.popularity
        this.release_date = movie.first_air_date
        this.vote = movie.vote_average
        this.genre_ids = movie.genre_ids
        this.original_language = movie.original_language
    }
}