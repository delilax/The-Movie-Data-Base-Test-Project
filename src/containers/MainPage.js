import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actionFiles/indexAC";
import Carousel from "../components/Carousel";

class MainPage extends Component {

//trigers action to get resources from Movie database with API key
  componentDidMount() {
    this.props.onGetMoviesShows();
  }

  render() {
    return (
      //Calling same component multiple times and sending diferent props
      //Send props:
      //  - state-array from redux
      //  - type-which is used to load details of clicked element

      <div>

        <div>Popular movies</div>
        <Carousel 
            state={this.props.popularMoviesState} 
            type="popularMovies" />

        <div>Popular series</div>
        <Carousel 
            state={this.props.popularSeriesState} 
            type="popularShows" />

        <div>Family</div>
        <Carousel 
            state={this.props.genreFamilyState} 
            type="genreFamily" />

        <div>Documentary</div>
        <Carousel
            state={this.props.genreDocumentaryState}
            type="genreDocumentary"
        />
      </div>
    );
  }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state => {
  return {
    popularMoviesState:     
        state.reducerShow.popularMovies,

    popularSeriesState:     
        state.reducerShow.popularSeries,

    genreFamilyState:       
        state.reducerShow.genreFamily,

    genreDocumentaryState:  
        state.reducerShow.genreDocumentary
  };
};

// mapStateToProps to dispatch get Movies to get data from API
const mapDispatchToProps = dispatch => {
  return {
    onGetMoviesShows: () => 
        dispatch(actionCreator.getMoviesShows())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
