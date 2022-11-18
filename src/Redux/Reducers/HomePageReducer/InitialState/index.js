import { ALL_GENRE_MOVIES } from '../constants'

export const INITIAL_STATE = {
    GeneralMovies: ALL_GENRE_MOVIES,
    Genres: ["Comedy", "Thriller", "Horror"],
    SearchText: "",
    selectedGenere: "",
    currentlyShowingMovie: ALL_GENRE_MOVIES
};