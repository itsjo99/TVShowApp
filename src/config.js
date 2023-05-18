const base_url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
const header = { 'accept': 'application/json',
'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDc1YzVhYzUxZTRhMTJjNjBkNjJiZDgzZDkwZjVkMCIsInN1YiI6IjY0NjNkZGI5ZWY4YjMyMDExYjE1NzhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u286pKAmeQxxIjg7RoKvgTQ1JaA2C-v-0V66c1UkPaU'
} 
const backdrop_url = "https://image.tmdb.org/t/p/original";
const small_backdrop_url = "https://image.tmdb.org/t/p/w300";
const base_url_recommendation = 'https://api.themoviedb.org/3/tv/';
const params = {language: 'en-US', page: '1'};
const params2 = {include_adult: 'false', language: 'en-US', page: '1'}
const headers =  {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDc1YzVhYzUxZTRhMTJjNjBkNjJiZDgzZDkwZjVkMCIsInN1YiI6IjY0NjNkZGI5ZWY4YjMyMDExYjE1NzhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u286pKAmeQxxIjg7RoKvgTQ1JaA2C-v-0V66c1UkPaU'
}
const base_url_search = 'https://api.themoviedb.org/3/search/tv';
const base_url_trailer = 'https://api.themoviedb.org/3/tv/';
const base_url_youtube = 'https://www.youtube.com/embed/'


export {base_url, header, backdrop_url, small_backdrop_url, base_url_recommendation, params, headers, base_url_search, params2, base_url_trailer, base_url_youtube};