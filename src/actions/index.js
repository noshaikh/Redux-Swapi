// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchPeeps = () => {
  const promise = axios.get(`https://swapi.co/api/people/`);
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        // console.log(response.data.results);
        dispatch({ type: FETCH_SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  };
};
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
