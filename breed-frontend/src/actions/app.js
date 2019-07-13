
export const FETCH_BREEDS_PENDING = 'FETCH_BREEDS_PENDING';
export const FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS';
export const FETCH_BREEDS_ERROR = 'FETCH_BREEDS_ERROR';

export function fetchBreedsPending() {
    return {
        type: FETCH_BREEDS_PENDING
    }
}

export function fetchBreedsSuccess(breeds) {
    return {
        type: FETCH_BREEDS_SUCCESS,
        breeds: breeds
    }
}

export function fetchBreedsError(error) {
    return {
        type: FETCH_BREEDS_ERROR,
        error: error
    }
}
