import { ALL_GENRE_MOVIES } from "../constants"

export const movieSearch = (state, payload) => {
    let movies = payload.searchText ? getSearchTextAddedMovieList(payload.searchText) : ALL_GENRE_MOVIES
    return {
        ...state,
        searchText: payload.searchText,
        selectedGenere: "",
        currentlyShowingMovie: movies,
    }
}

export const clearSearch = (state, payload) => {
    return state
}

const getSearchTextAddedMovieList = (searchText) => {
    let updatedData = []
    ALL_GENRE_MOVIES.forEach(item => {
        let rowData = []
        item.forEach(data => {
            if (data.Title.toLowerCase().includes(searchText.toLowerCase())) {
                rowData.push(data)
            }
        })
        updatedData.splice(updatedData.length, 0, rowData)
    })
    return updatedData
}