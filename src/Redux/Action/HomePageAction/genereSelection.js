import {
    ON_SELECT_GENERE,
    CLEAR_GENERE
} from '../../constants';

export const onSelectGenere = (payload, cb) => {
    return async (dispatch) => {
        dispatch({
            type: ON_SELECT_GENERE,
            payload: { ...payload },
        });
    };
}

export const clearGenere = (payload, cb) => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_GENERE,
            payload: { ...payload },
        });
    };
}