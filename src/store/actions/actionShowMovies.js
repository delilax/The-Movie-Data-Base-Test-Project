// Actions for API registration and geting movie list

import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const getPopularMovieSuccess = (data) => {
    return {
        type:actionTypes.GET_POPULAR_MOVIES_SUCCESS,
        data:data
    };
};

export const getPopularSeriesSuccess = (data) => {
    return {
        type:actionTypes.GET_POPULAR_SERIES_SUCCESS,
        data:data
    };
};

export const getGenreFamilySuccess = (data) => {
    return {
        type:actionTypes.GET_GENRE_FAMILY_SUCCESS,
        data:data
    };
};

export const getGenreDocumentarySuccess = (data) => {
    return {
        type:actionTypes.GET_GENRE_DOCUMENTARY_SUCCESS,
        data:data
    };
};


export const getMovies = () => {
    return dispatch => {

        //get popular movies
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3d354fab690422403967270480198b1b&language=en-US')
        .then(response =>{
            //Dispatch fetch and changed data with function getData. Response is extracted title and poster_path
            dispatch (getPopularMovieSuccess(getData(response)));
        })
        .catch(error => {
            console.log(error);
        });

        //get popular series
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=3d354fab690422403967270480198b1b&language=en-US&page=1')
        .then(response =>{
            dispatch (getPopularSeriesSuccess(getData(response)));
        })
        .catch(error => {
            console.log(error);
        });

        //get Family genre
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3d354fab690422403967270480198b1b&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=10751')
        .then(response =>{
            dispatch (getGenreFamilySuccess(getData(response)));
        })
        .catch(error => {
            console.log(error);
        });


        //get Documentary genre
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3d354fab690422403967270480198b1b&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=99')
        .then(response =>{
        dispatch (getGenreDocumentarySuccess(getData(response)));
        })
        .catch(error => {
            console.log(error);
        });



        const getData = (response) =>{
            // extract results from object - get list of shows

            let getResultData = [];
            let res=response.data.results;
            for (let key in res) {
                getResultData.push({
                    ...res[key],
                    id: key
                });
        }



        console.log(getResultData);
        
         // extract title and poster path from results
        let getEndData=[];

        //On Popular TV series there is no "title", use "name"
        getResultData.map(res=>{
            if(res.title!==undefined){
                getEndData.push({
                    id:res.id,
                    path:res.poster_path, 
                    title:res.title, 
                    description:res.overview,
                    original_title:res.original_title,
                    popularity:res.popularity,
                    release_date:res.release_date,
                    vote_average:res.vote_average,
                    vote_count:res.vote_count,
                    original_language:res.original_language
                    })
            }
            else{
                getEndData.push({
                    id:res.id,
                    path:res.poster_path, 
                    title:res.name, 
                    description:res.overview,
                    first_air_date:res.first_air_date,
                    original_language:res.original_language,
                    original_name:res.original_name,
                    popularity:res.popularity,
                    vote_average:res.vote_average,
                    vote_count:res.vote_count
                })
            }
            return null;
        })
            return getEndData;
        }

    };
};