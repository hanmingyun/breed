import { fetchBreedsPending, fetchBreedsSuccess, fetchBreedsError } from './../../src/actions/app';

const BASE_URL = "http://localhost:3100/api/";

function fetchBreeds(endpoint) {
    return dispatch => {
        dispatch(fetchBreedsPending());
        fetch(BASE_URL + endpoint)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log(res.message)
                dispatch(fetchBreedsSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchBreedsError(error));
            })
    }
}

export default fetchBreeds;