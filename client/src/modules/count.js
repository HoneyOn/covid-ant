import { handleActions } from 'redux-actions';
import { createPromiseThunk } from '../lib/asyncUtils';

import axios from 'axios';

function getCountAPI(today = 20201209) {
  return axios.get(`api/count/${today}`);
}

const GET_COUNT = 'count/GET_COUNT';
const GET_COUNT_SUCCESS = 'count/GET_COUNT_SUCCESS';
const GET_COUNT_FAILURE = 'count/GET_COUNT_FAILURE';

export const getCount = createPromiseThunk(GET_COUNT, getCountAPI);

const initialState = {
  pending: false,
  error: false,
  coronaCount: '',
};

export default handleActions(
  {
    [GET_COUNT]: (state) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [GET_COUNT_SUCCESS]: (state, action) => {
      // console.log(action.payload.data.count);
      return {
        ...state,
        pending: false,
        coronaCount: action.payload.data.count,
      };
    },
    [GET_COUNT_FAILURE]: (state) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState
);
