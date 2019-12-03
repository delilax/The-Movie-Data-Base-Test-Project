import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actionFiles/indexAC";
import Carousel from "../components/Carousel";

export class MainPage extends Component {
  state = {
    styleText: {
      position: "relative",
      height: "5vmin",
      padding: "1vmin 0 1vmin 5vmin",
      textAlign: "left",
      color: "white",
      font: "Arial, sans-serif",
      fontSize: "2.5vmin",
      fontStyle: "bold",
      textDecoration: "none"
    },

    styleTitle: {
      position: "relative",
      height: "5vmin",
      padding: "3vmin",
      textAlign: "left",
      textTransform: "uppercase",
      color: "white",
      font: "Arial, sans-serif",
      fontSize: "2.5vmin",
      fontStyle: "bold",
      textDecoration: "none"
    },

    styleContainerCarousel: {
      position: "relative",
      padding: "3vmin"
    }
  };

  //trigers action to get resources from Movie database with API key
  componentDidMount() {
    try {
      this.props.onGetMoviesShows();
    } catch (err) {
      console.log("Error dispatch to actions"+err);
    }
  }

  render() {
    return (
      //Calling same component multiple times and sending diferent props
      //Send props:
      //  - state-array from redux
      //  - type-which is used to load details of clicked element

      <div>
        <h1 style={this.state.styleTitle}>The Movie Database - Test Project</h1>

        <h2 style={this.state.styleText}>Popular movies</h2>

        <div style={this.state.styleContainerCarousel}>
          <Carousel
            state={this.props.popularMoviesState}
            type="popularMovies"
          />
        </div>

        <h2 style={this.state.styleText}>Popular series</h2>

        <div style={this.state.styleContainerCarousel}>
          <Carousel state={this.props.popularSeriesState} type="popularShows" />
        </div>

        <h2 style={this.state.styleText}>Family</h2>

        <div style={this.state.styleContainerCarousel}>
          <Carousel state={this.props.genreFamilyState} type="genreFamily" />
        </div>

        <h2 style={this.state.styleText}>Documentary</h2>

        <div style={this.state.styleContainerCarousel}>
          <Carousel
            state={this.props.genreDocumentaryState}
            type="genreDocumentary"
          />
        </div>
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
