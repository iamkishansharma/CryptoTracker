import {
  FETCHING_COINDATA,
  FETCHING_COINDATA_SUCCESS,
  FETCHING_COINDATA_FAIL,
} from '../utils/ActionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COINDATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      });
    case FETCHING_COINDATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });
    case FETCHING_COINDATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
}
