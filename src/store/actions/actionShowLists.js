// Actions for geting movie lists with API key

import axios from "axios";
import * as actionTypes from "./actionFiles/ActionTypes";
import getDataMoviesShows from "./actionFiles/getDataMoviesShows";

export const getPopularMovieSuccess = data => {
  return {
    type: actionTypes.GET_POPULAR_MOVIES_SUCCESS,
    data: data
  };
};

export const getPopularSeriesSuccess = data => {
  return {
    type: actionTypes.GET_POPULAR_SERIES_SUCCESS,
    data: data
  };
};

export const getGenreFamilySuccess = data => {
  return {
    type: actionTypes.GET_GENRE_FAMILY_SUCCESS,
    data: data
  };
};

export const getGenreDocumentarySuccess = data => {
  return {
    type: actionTypes.GET_GENRE_DOCUMENTARY_SUCCESS,
    data: data
  };
};

export const getGenreSuccess = data => {
  return {
    type: actionTypes.GET_GENRE_SUCCESS,
    data: data
  };
};

export const getLanguageSuccess = data => {
  return {
    type: actionTypes.GET_LENGUAGE_SUCCESS,
    data: data
  };
};

export const getMoviesShows = () => {
  return dispatch => {

    //get popular movies
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3d354fab690422403967270480198b1b&page=1"
      )
      .then(response => {
        dispatch(getPopularMovieSuccess(getDataMoviesShows(response, "type1")));
      })
      .catch(error => {
        console.log(error);
      });


    //get popular series
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=3d354fab690422403967270480198b1b&page=1"
      )
      .then(response => {
        dispatch(
          getPopularSeriesSuccess(getDataMoviesShows(response, "type2"))
        );
      })
      .catch(error => {
        console.log(error);
      });


    //get Family genre
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3d354fab690422403967270480198b1b&"+
        "sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"
      )
      .then(response => {
        dispatch(getGenreFamilySuccess(getDataMoviesShows(response, "type1")));
      })
      .catch(error => {
        console.log(error);
      });


    //get Documentary genre
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3d354fab690422403967270480198b1b&"+
        "sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"
      )
      .then(response => {
        dispatch(
          getGenreDocumentarySuccess(getDataMoviesShows(response, "type1"))
        );
      })
      .catch(error => {
        console.log(error);
      });


    //get list of genres for displaying in Details of the show/movie
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=3d354fab690422403967270480198b1b"
      )
      .then(response => {
        // Extract data from object into array
        let getResultData = [];
        let res = response.data.genres;

        for (let key in res) {
          getResultData.push({
            ...res[key],
            id: key

          });
        }
        dispatch(getGenreSuccess(getResultData));
      })
      .catch(error => {
        console.log(error);
      });


    //get list of languages for displaying in Details of the show/movie
    axios
      .get(
        "https://api.themoviedb.org/3/configuration/languages?api_key=3d354fab690422403967270480198b1b"
      )
      .then(response => {
        // Extract data from object into array
        // console.log(response);
        let getResultData = [];
        let res = response.data;

        for (let key in res) {
          getResultData.push({
            ...res[key],
            id: key
            
          });
        }
        // console.log(getResultData);
        dispatch(getLanguageSuccess(getResultData));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
