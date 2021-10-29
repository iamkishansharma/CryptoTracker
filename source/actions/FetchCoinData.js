import React from 'react';
import {
  FETCHING_COINDATA,
  FETCHING_COINDATA_SUCCESS,
  FETCHING_COINDATA_FAIL,
} from '../utils/ActionTypes';
import axios from 'axios';
import {apiBaseUrl} from '../utils/Constant';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({
      type: FETCHING_COINDATA,
    });

    return axios
      .get(`${apiBaseUrl}/v1/ticker/?limit=10`)
      .then(res => {
        return dispatch({type: FETCHING_COINDATA_SUCCESS, payload: res.data});
      })
      .catch(err => {
        return dispatch({type: FETCHING_COINDATA_FAIL, payload: err});
      });
  };
}
