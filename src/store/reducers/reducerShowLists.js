// Raducer for API registration and geting movie list
import * as actionTypes from "../actions/actionFiles/ActionTypes";

const initialState = {};

const getPopularMovieSuccess = (state, action) => {
  return {
    ...state,
    popularMovies: action.data
  };
};

const getPopularSeriesSuccess = (state, action) => {
  return {
    ...state,
    popularSeries: action.data
  };
};

const getGenreFamilySuccess = (state, action) => {
  return {
    ...state,
    genreFamily: action.data
  };
};

const getGenreDocumentarySuccess = (state, action) => {
  return {
    ...state,
    genreDocumentary: action.data
  };
};

const getGenreSuccess = (state, action) => {
  return {
    ...state,
    genre: action.data
  };
};

const getLanguageSuccess = (state, action) => {
  return {
    ...state,
    language: action.data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      
    case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return getPopularMovieSuccess(state, action);
      
    case actionTypes.GET_POPULAR_SERIES_SUCCESS:
      return getPopularSeriesSuccess(state, action);
      
    case actionTypes.GET_GENRE_FAMILY_SUCCESS:
      return getGenreFamilySuccess(state, action);
      
    case actionTypes.GET_GENRE_DOCUMENTARY_SUCCESS:
      return getGenreDocumentarySuccess(state, action);
      
    case actionTypes.GET_GENRE_SUCCESS:
      return getGenreSuccess(state, action);
      
    case actionTypes.GET_LENGUAGE_SUCCESS:
      return getLanguageSuccess(state, action);
      
    default:
      return state;
  }
};

export default reducer;
