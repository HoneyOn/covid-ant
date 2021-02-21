import { createAction, handleActions } from 'redux-actions';

// Action form
const CHANGE_SEARCH = 'search/CHANGE_SEARCH';
const INITIALIZE_SEARCH = 'search/INITIALIZE_SEARCH';

export const changeSearch = createAction(
  CHANGE_SEARCH,
  (companyName) => companyName
);
export const initializeSearch = createAction(INITIALIZE_SEARCH);

const initialState = { companyName: '' };

const search = handleActions(
  {
    [CHANGE_SEARCH]: (state, { payload: companyName }) => ({
      ...state,
      companyName: companyName,
    }),
    [INITIALIZE_SEARCH]: (state) => ({
      ...state,
      companyName: initialState.companyName,
    }),
  },
  initialState
);

export default search;
