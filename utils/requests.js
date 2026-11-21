const API_KEY = process.env.API_KEY;

export default {
    
    fetchTrendingSeries: {
        title: "Trending Series",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&watch_region=FR&with_watch_providers=119&with_watch_monetization_types=flatrate&sort_by=popularity.desc`
    },
    
    fetchRomComSeries: {
        title: 'Rom-Com Series',
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&watch_region=FR&with_watch_providers=119&with_watch_monetization_types=flatrate&with_genres=35&sort_by=popularity.desc`
    },

    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language-en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-05`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-28`
    },
    fetchComedyMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-37`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-16`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres-10770`
    },
}
