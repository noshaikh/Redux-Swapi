import {
  /* we need our action types here*/ FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "./../actions/index";
import { Object } from "core-js";

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  peeps: [],
  fetchingPeeps: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetchingPeeps: true });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        peeps: action.payload,
        fetchingPeeps: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingPeeps: false,
        error: "Error fetching Peeps"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
