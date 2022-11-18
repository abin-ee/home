import {
    ON_SEARCH_MOVIES,
    CLEAR_SEARCH
} from '../../constants';

export const onSearch = (payload, cb) => {
    return async (dispatch) => {
        dispatch({
            type: ON_SEARCH_MOVIES,
            payload: { ...payload },
        });
    };
}

export const clearSearch = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_SEARCH,
            payload: { ...payload },
        });
    };
}