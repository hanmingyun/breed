import { ACTIONTYPE }  from './../actions/app';

const initialState = {
    pending: false,
    breeds: null,
    error: null,
    breed : null,
    sub_breeds: null
}

export default function breedsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONTYPE.FETCH_BREEDS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONTYPE.FETCH_BREEDS_SUCCESS:
            return {
                ...state,
                pending: false,
                breeds: action.breeds
            }
        case ACTIONTYPE.FETCH_BREEDS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ACTIONTYPE.FETCH_SUB_BREEDS_SUCCESS:
            return {
                ...state,
                pending: false,
                breed: action.breed
            }
        case ACTIONTYPE.FETCH_SUB_BREEDS_BY_ID:
            return {
                ...state,
                pending: false,
                sub_breeds: action.sub_breeds
            }
        default:
            return state;
    }
}

export const getBreeds = state => state.app.breeds; 
export const getBreedsPending = state => state.app.pending;
export const getBreedsError = state => state.app.error;
export const getSubBreeds = state => state.app.breed; 
export const getSubBreedsById = state => state.app.sub_breeds; 
