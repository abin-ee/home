import {
    ON_SEARCH_MOVIES,
    CLEAR_SEARCH,
    ON_SELECT_GENERE,
    CLEAR_GENERE
} from '../../constants';
import {
    genereSearch,
    clearGenere,
    movieSearch,
    clearSearch
} from './Helper';
import { INITIAL_STATE } from './InitialState';

export const HomePageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_SEARCH_MOVIES:
            return movieSearch(state, action.payload);
        case CLEAR_SEARCH:
            return clearSearch(state, action.payload);
        case ON_SELECT_GENERE:
            return genereSearch(state, action.payload);
        case CLEAR_GENERE:
            return clearGenere(state, action.payload);
        default:
            return { ...state };
    }
}