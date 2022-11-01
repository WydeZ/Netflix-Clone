const API_KEY = "80e2b0394fbadb267880ad05d0759e2a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// https://image.tmdb.org/t/p/original/83oeqwN64WtafGoITvsOzjKIQaM.jpg header
// https://image.tmdb.org/t/p/w500/m7tG5E1EbywuwTsl6hq990So0Bx.jpg small (poster path and backdrop path)
/* {"page":1,"results":[{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","genre_ids":[28,878,14],"id":436270,"original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","popularity":4438.636,"poster_path":"/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg","release_date":"2022-10-19","title":"Black Adam","video":false,"vote_average":7.1,"vote_count":623}
 https://api.themoviedb.org/3/discover/movie?api_key=80e2b0394fbadb267880ad05d0759e2a&with_genres=28

*/

export default requests;
