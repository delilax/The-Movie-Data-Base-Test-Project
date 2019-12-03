// Raducer for API registration and geting movie list
import * as actionTypes from "../actions/actionFiles/ActionTypes";

const initialState = {};

const getSearchedListSuccess = (state, action) => {
  return {
    ...state,
    searchedList: action.data
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCHED_LIST_SUCCESS:
      return getSearchedListSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
