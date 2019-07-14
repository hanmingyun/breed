
export const ACTIONTYPE = {
    FETCH_BREEDS_PENDING: 'FETCH_BREEDS_PENDING',
    FETCH_BREEDS_SUCCESS:  'FETCH_BREEDS_SUCCESS',
    FETCH_BREEDS_ERROR: 'FETCH_BREEDS_ERROR',
    FETCH_SUB_BREEDS_SUCCESS: 'FETCH_SUB_BREEDS_SUCCESS',
    FETCH_SUB_BREEDS_BY_ID: 'FETCH_SUB_BREEDS_BY_ID',
    FETCH_RANDOM_BREED: 'FETCH_RANDOM_BREED'
};

export function fetchBreedsPending() {
    return {
        type: ACTIONTYPE.FETCH_BREEDS_PENDING
    }
}

export function fetchBreedsError(error) {
    return {
        type: ACTIONTYPE.FETCH_BREEDS_ERROR,
        error: error
    }
}


export function fetchBreedsSuccess(breeds, action) {
    switch (action) {
        case ACTIONTYPE.FETCH_BREEDS_SUCCESS:
            return {
                type: action,
                breeds: breeds
            }
        case ACTIONTYPE.FETCH_SUB_BREEDS_SUCCESS:
            return {
                type: action,
                breed: breeds
            }
        case ACTIONTYPE.FETCH_SUB_BREEDS_BY_ID:
            return {
                type: action,
                sub_breeds: breeds
            }
        case ACTIONTYPE.FETCH_RANDOM_BREED:
            return {
                type: action,
                breed: breeds
            }
        default:

        }

}