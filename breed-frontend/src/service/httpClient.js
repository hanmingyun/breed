import { 
    fetchBreedsPending,
    fetchBreedsSuccess,
    fetchBreedsError, 
 } from './../../src/actions/app';

const BASE_URL = "http://localhost:3100/api/";

export default function fetchBreeds(endpoint, action) {
    return dispatch => {
        dispatch(fetchBreedsPending());
        fetch(BASE_URL + endpoint)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchBreedsSuccess(res.message, action));
                return res.message;
            })
            .catch(error => {
                dispatch(fetchBreedsError(error));
            })
    }
}
