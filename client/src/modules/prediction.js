import { handleActions } from 'redux-actions';
import { createPromiseThunk } from '../lib/asyncUtils';

import axios from 'axios';

function getPredictionAPI(enterprise) {
  return axios.get(`api/predict/${enterprise}`);
}

const GET_PREDICTION = 'prediction/GET_PREDICTION';
const GET_PREDICTION_SUCCESS = 'prediction/GET_PREDICTION_SUCCESS';
const GET_PREDICTION_FAILURE = 'prediction/GET_PREDICTION_FAILURE';

export const getPrediction = createPromiseThunk(
  GET_PREDICTION,
  getPredictionAPI
);

const initialState = {
  pending: false,
  error: false,
  prediction: '',
};

export default handleActions(
  {
    [GET_PREDICTION]: (state) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [GET_PREDICTION_SUCCESS]: (state, action) => {
      const prediction = action.payload.data.prediction;
      return {
        ...state,
        pending: false,
        prediction: prediction,
      };
    },
    [GET_PREDICTION_FAILURE]: (state) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState
);
