import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actionFiles/indexAC";
import Carousel from "../components/Carousel";

class Search extends Component {

  state = {
    searchText: ""
  };

  //saving input text in state while entering in input
  onSearchInpuText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  //Call action with props to get array of movies/shows by word entered in input
  onSearchButton = () => {
    this.props.onSearchList(this.state.searchText);
  };

  render() {
    

    // check if redux state is null or undefined and assign JSX to variable. 
    //Call Carousel element and send props

    let carouselSearch = null;

    if (this.props.searched != null || 
        this.props.searched !== undefined) {

            carouselSearch = <Carousel 
                                 state={this.props.searched} 
                                 type="searched" />;
    }

    return (

      <div>

        <input
          type="text"
          placeholder="Search"
          value={this.state.containText}
          onChange={this.onSearchInpuText}
        />

        <button 
            onClick={() => this.onSearchButton()}>
               Search
         </button>

        {carouselSearch}

      </div>
    );
  }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state => {
  return {

    searched: 
         state.reducerSearch.searchedList

  };
};

// mapStateToProps to dispatch get Search List to get data from API
const mapDispatchToProps = dispatch => {
  return {
     
    onSearchList: searchText =>
         dispatch(actionCreator.getSearchedList(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
