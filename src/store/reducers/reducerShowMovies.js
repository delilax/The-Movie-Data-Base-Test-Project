// Raducer for API registration and geting movie list
import * as actionTypes from '../actions/ActionTypes';

const initialState={

};


const getPopularMovieSuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            popularMovies:action.data
            };
           
};

const getPopularSeriesSuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            popularSeries:action.data
            };
           
};

const getGenreFamilySuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            genreFamily:action.data
            };
           
};

const getGenreDocumentarySuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            genreDocumentary:action.data
            };
           
};

const getGenreSuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            genre:action.data
            };
           
};

const getLanguageSuccess = (state,action) =>{
    // console.log(action.data);
        return{
            ...state,
            language:action.data
            };
           
};

const reducer = (state=initialState,action) => {
    switch(action.type){
         case(actionTypes.GET_POPULAR_MOVIES_SUCCESS): return getPopularMovieSuccess(state,action);
         case(actionTypes.GET_POPULAR_SERIES_SUCCESS): return getPopularSeriesSuccess(state,action);
         case(actionTypes.GET_GENRE_FAMILY_SUCCESS): return getGenreFamilySuccess(state,action);
         case(actionTypes.GET_GENRE_DOCUMENTARY_SUCCESS): return getGenreDocumentarySuccess(state,action);
         case(actionTypes.GET_GENRE_SUCCESS): return getGenreSuccess(state,action);
         case(actionTypes.GET_LENGUAGE_SUCCESS): return getLanguageSuccess(state,action);
        default: return state;
    }
};

export default reducer;

