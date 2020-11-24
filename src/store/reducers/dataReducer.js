/* eslint-disable no-fallthrough */
import actionTypes from '../types';

const initialState = {
  data: [],
  activeRecord: undefined,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_LIST: {
      const updates = {
        data: action.payload,
      };
      return {
        ...state,
        ...updates,
      };
    }
    case actionTypes.SET_ACTIVE_RECORD: {
      const updates = {
        activeRecord: action.payload,
      };
      return {
        ...state,
        ...updates,
      };
    }
    case actionTypes.GET_RECORD: {
      return state.activeRecord;
    }
    default:
      return state;
  }
};

export default dataReducer;
