import React, {Component} from 'react';
import {connect} from 'react-redux';

import ShakaPlayer from '../../components/ShakaPlayer/ShakaPlayer';

class Details extends Component {

    state={
        urlBase:"http://image.tmdb.org/t/p/w342",
        type:this.props.location.state.type,
        id:this.props.location.state.id,
        stateList:null,
        player:null
        }

    componentDidMount=()=>{
        //call redux state to get a list of movies or shows. TYPE and ID getting through the Redirect props
        if(this.props.popularMoviesState!=null || this.props.popularMoviesState!==undefined){
            switch(this.props.location.state.type){
                case('popularMovies'):      this.setState({stateList:this.props.popularMoviesState});break;
                case('popularShows'):       this.setState({stateList:this.props.popularSeriesState});break;
                case('genreFamily'):        this.setState({stateList:this.props.genreFamilyState});break;
                case('genreDocumentary'):   this.setState({stateList:this.props.genreDocumentaryState});break;
                default:return null;
            }
        }
    }

    onWatchMovieHandler = () =>{
        console.log("Clicked Watch movie");
        this.setState({player:<ShakaPlayer />});
    }

    render(){

        console.log(this.state.stateList);
        console.log(this.state.id);
 
        if(this.state.stateList!==null & this.state.stateList!==undefined){
            console.log(this.state.stateList[this.state.id].title);
        }


    return(
        <div>
            {this.state.stateList!==null & this.state.stateList!==undefined ?
                        <div>
                         <div>Title: {this.state.stateList[this.state.id].title}</div>
                         <div>Description: {this.state.stateList[this.state.id].description}</div>
                        <div>Genre: {this.state.stateList[this.state.id].genre_ids}</div>
                        <div>original_title: {this.state.stateList[this.state.id].original_title}</div>
                        <div>original_language: {this.state.stateList[this.state.id].original_language}</div>
                        <div>release_date: {this.state.stateList[this.state.id].release_date}</div>
                        <div>vote_average: {this.state.stateList[this.state.id].vote_average}</div>
                        <div>vote_count: {this.state.stateList[this.state.id].vote_count}</div>
                        <button onClick={()=>this.onWatchMovieHandler()}>Watch Movie</button>


                        <img  width='50%' src={this.state.urlBase+this.state.stateList[this.state.id].path} alt="Unable to load"/>
                </div>
                : null   
            }
        {this.state.player}
        </div>

    )
    }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state =>{
    return {
        popularMoviesState: state.reducerShow.popularMovies,
        popularSeriesState: state.reducerShow.popularSeries,
        genreFamilyState: state.reducerShow.genreFamily,
        genreDocumentaryState: state.reducerShow.genreDocumentary
    };
};

export default connect(mapStateToProps)(Details);
