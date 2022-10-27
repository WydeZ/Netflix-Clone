const API_KEY = '80e2b0394fbadb267880ad05d0759e2a'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

// https://image.tmdb.org/t/p/original/83oeqwN64WtafGoITvsOzjKIQaM.jpg header 
// https://image.tmdb.org/t/p/w500/m7tG5E1EbywuwTsl6hq990So0Bx.jpg small (poster path and backdrop path)
/* {"page":1,
    "results":
    [{
        "backdrop_path":"/5vUux2vNUTqwCzb7tVcH18XnsF.jpg",
        "first_air_date":"2022-09-21",
        "genre_ids":[18,80],"id":113988,
        "name":"Dahmer – Monster: The Jeffrey Dahmer Story",
        "origin_country":["US"],"original_language":"en",
        "original_name":"Dahmer – Monster: The Jeffrey Dahmer Story",
        "overview":"Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?",
        "popularity":4202.209,
        "poster_path":"/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
        "vote_average":8.3,
        "vote_count":1118
    }
     ]}
 */

export default requests



