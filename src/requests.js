import {API_KEY} from "../src/utils/constants";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fecthComdeyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fecthHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests
