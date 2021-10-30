import React from 'react';
import {
  FETCHING_COINDATA,
  FETCHING_COINDATA_SUCCESS,
  FETCHING_COINDATA_FAIL,
} from '../utils/ActionTypes';
import axios from 'axios';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({
      type: FETCHING_COINDATA,
    });

    return axios
      .get(`${process.env.REACT_APP_BASE_URL}`, {
        headers: {
          'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then(res => {
        return dispatch({type: FETCHING_COINDATA_SUCCESS, payload: res.data});
      })
      .catch(err => {
        return dispatch({type: FETCHING_COINDATA_FAIL, payload: err});
      });
  };
}
