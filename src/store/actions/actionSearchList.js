// Actions for geting movie lists based by search with API key

import axios from "axios";
import * as actionTypes from "./actionFiles/ActionTypes";
import getDataMoviesShows from "./actionFiles/getDataMoviesShows";

export const getSearchedListSuccess = data => {
  return {
    type: actionTypes.GET_SEARCHED_LIST_SUCCESS,
    data: data
  };
};

export const getSearchedList = searchText => {
  return dispatch => {
    //use axios to get searched list using text from input in Search.js
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=3d354fab690422403967270480198b1b&query=" +
          searchText +
          "&page=1&include_adult=false"
      )
      
      .then(response => {
        dispatch(getSearchedListSuccess(getDataMoviesShows(response, "type1")));
      })
      
      .catch(error => {
        console.log(error);
      });
  };
};
