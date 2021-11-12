import React from 'react';
import {
  FETCHING_COINDATA,
  FETCHING_COINDATA_SUCCESS,
  FETCHING_COINDATA_FAIL,
} from '../utils/ActionTypes';
import axios from 'axios';

// env data
import {URL, KEY} from '../utils/Constant';
export default function FetchCoinData() {
  return dispatch => {
    dispatch({
      type: FETCHING_COINDATA,
    });

    return axios
      .get(`${URL}`, {
        headers: {
          'X-CMC_PRO_API_KEY': `${KEY}`,
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
