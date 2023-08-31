import {API_KEY} from './constants/constants'
export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749` 
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27` 
export const trending = `/trending/all/week?api_key=${API_KEY}` 