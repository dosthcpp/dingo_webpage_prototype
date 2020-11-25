import { GET_DATA, GET_AGREEMENT } from "../actions/types";

const INITIAL_STATE = {
  data: [],
  agreement: [],
};

export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    case GET_AGREEMENT:
      return { ...state, agreement: action.payload };
    default:
      return state;
  }
};
