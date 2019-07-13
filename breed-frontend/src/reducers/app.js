import { FETCH_BREEDS_PENDING, FETCH_BREEDS_SUCCESS, FETCH_BREEDS_ERROR } from './../actions/app';

const initialState = {
    pending: false,
    breeds: [],
    error: null
}

export default function breedsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BREEDS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_BREEDS_SUCCESS:
            return {
                ...state,
                pending: false,
                breeds: action.payload
            }
        case FETCH_BREEDS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getBreeds = state => state.breeds;
export const getBreedsPending = state => state.pending;
export const getBreedsError = state => state.error;