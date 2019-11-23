// Raducer for API registration and geting movie list
import * as actionTypes from '../actions/ActionTypes';

const initialState={

};


const getPopularMovieSuccess = (state,action) =>{

    console.log(action.events);

        return{
            ...state,
            popular:action.events
            };
           
};

const reducer = (state=initialState,action) => {
    switch(action.type){
         case(actionTypes.GET_POPULAR_MOVIES_SUCCESS): return getPopularMovieSuccess(state,action);
        default: return state;
    }
};

export default reducer;

