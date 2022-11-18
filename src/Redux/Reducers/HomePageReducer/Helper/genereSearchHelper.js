import { ALL_GENRE_MOVIES } from "../constants"

export const genereSearch = (state, payload) => {
    let movie = payload.genre ? getGenreAddedMovieList(payload.genre) : ALL_GENRE_MOVIES
    return {
        ...state,
        currentlyShowingMovie: movie,
        selectedGenere: payload.genre,
        searchText: "",
    }
}

export const clearGenere = (state, payload) => {
    return state
}

const getGenreAddedMovieList = (genre)=>{
    let updatedData = []
    ALL_GENRE_MOVIES.forEach(item=>{
        let rowData = []
        item.forEach(data=>{
            if(data.genre===genre){
                rowData.push(data)
            }
        })
        updatedData.splice(updatedData.length,0,rowData)
    })
    return updatedData
}

