import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actionFiles/indexAC";
import Carousel from "../components/Carousel";

class Search extends Component {
  state = {
    searchText: "",
    clickedBtn: false,

    styleContainer: {
      height: "100vh"
    },

    styleContainerCarousel: {
      position: "relative",
      padding: "5vmin 3vmin"
    },

    styleContInputButton: {
      padding: "5vmin 3vmin"
    },

    styleBtn: {
      padding: "4px 18px 4px 18px",
      marginLeft: "15px",
      backgroundColor: "rgba(0,0,0,0)",
      color: "rgb(255,255,255)",
      fontSize: "1.5vmax",
      fontWeight: "bold",
      cursor: "pointer",
      border: "1px solid rgb(255,255,255)",
      outline: "none",
      boxShadow:
        "0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      textTransform: "uppercase"
    },

    styleInput: {
      width: "80vw",
      fontSize: "1.5vmax"
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
    }
  };

  //saving input text in state while entering in input
  onSearchInpuText = event => {
    try {
      this.setState({ searchText: event.target.value });
      if (event.target.value === "") {
        this.setState({ clickedBtn: false });
      }
    } catch (err) {
      console.log("Error getting state on input text" + err);
    }
  };

  //Call action with props to get array of movies/shows by word entered in input
  onSearchButton = () => {
    try {
      this.setState({ clickedBtn: true });
    } catch (err) {
      console.log("Error set state on button clicked " + err);
    }

    try {
      this.props.onSearchList(this.state.searchText);
    } catch (err) {
      console.log("Error on trying to dispatch input text to redux" + err);
    }
  };

  //Enable search with Enter pressed on keyboard from input
  handleKeyPress = e => {
    try {
      if (e.key === "Enter") {
        this.onSearchButton();
      }
    } catch (err) {
      console.log("Error on pressed Enter implementation" + err);
    }
  };

  render() {
    // check if redux state is null or undefined and assign JSX to variable.
    //Call Carousel element and send props
    let carouselSearch = null;

    try {
      if ((this.state.searchText !== "") & this.state.clickedBtn) {
        if (this.props.searched != null || this.props.searched !== undefined) {
          carouselSearch = (
            <Carousel state={this.props.searched} type="searched" />
          );
        }
      }
    } catch (err) {
      console.log("Error on loading Carousel" + err);
    }

    return (
      <div style={this.state.styleContainer}>
        <h1 style={this.state.styleTitle}>Search</h1>

        <div style={this.state.styleContInputButton}>
          <input
            autoFocus
            style={this.state.styleInput}
            type="text"
            placeholder="Search"
            value={this.state.containText}
            onChange={this.onSearchInpuText}
            onKeyPress={this.handleKeyPress}
          />

          <button
            style={this.state.styleBtn}
            onClick={() => this.onSearchButton()}
          >
            Search
          </button>
        </div>

        <div style={this.state.styleContainerCarousel}>{carouselSearch}</div>
      </div>
    );
  }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state => {
  return {
    searched: state.reducerSearch.searchedList
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
