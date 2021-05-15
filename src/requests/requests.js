const APIKEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28&sort_by=popularity.desc&with_watch_providers=9|119&watch_region=IN`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35&sort_by=popularity.desc&with_watch_providers=9|119&watch_region=IN`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27&sort_by=popularity.desc&with_watch_providers=9|119&watch_region=IN`,
  fetchAnimationMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16&sort_by=popularity.desc&with_watch_providers=9|119&watch_region=IN`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99&sort_by=popularity.desc&with_watch_providers=9|119&watch_region=IN`,
};

export default requests;
