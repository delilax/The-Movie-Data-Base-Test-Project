// Actions for API registration and geting movie list

import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const getEventsSuccess = (events) => {
    return {
        type:actionTypes.GET_POPULAR_MOVIES_SUCCESS,
        events:events
    };
};


export const getEventsFailed = () =>{
    return {
        type: actionTypes.GET_POPULAR_MOVIES_FAILED
    };
};

export const getMovies = () => {
    return dispatch => {
        //get popular movies
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3d354fab690422403967270480198b1b&language=en-US')
        .then(response =>{
            console.log(response);

            let getNewToDos = [];
            let res=response.data.results;
            for (let key in res) {
                getNewToDos.push({
            ...res[key],
            id: key
          });
        }

        console.log(getNewToDos);
        
        let getData=[];
        getNewToDos.map(event=>{
            // console.log(event.poster_path);
            // console.log(event.title);
            getData.push({path:event.poster_path, title:event.title})
        })

        console.log(getData);
        dispatch (getEventsSuccess(getData));



        })
        .catch(error => {
            console.log(error);
        });

    };
};