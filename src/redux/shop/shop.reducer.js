import actionTypes from './shop.types.js';

const INITIAL_STATE = {
  collections: {},
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTIONS_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    }

    case actionTypes.FETCH_COLLECTIONS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default shopReducer;
