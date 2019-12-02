import React, { Component } from "react";
import { connect } from "react-redux";
import Auxx from '../hoc/Auxx';

import ShakaPlayer from "./ShakaPlayer";

class Details extends Component {
  //call redux state to get a list of movies or shows. TYPE and ID getting through the props and store in state

  state = {
    urlBase: "http://image.tmdb.org/t/p/w342",
    type: this.props.location.state.type,
    id: this.props.location.state.id,
    stateList: null,
    player: null,

    styleBtn:{
      padding:'12px',
      backgroundColor:'rgba(0,0,0,0)',
      color:'rgb(255,255,255)',
      fontSize:'1.5vmax',
      fontWeight:'bold',
      cursor: 'pointer',
      border: '1px solid rgb(255,255,255)',
      outline: 'none',
      boxShadow: '0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      textTransform: 'uppercase',
    },

    landscape:{
      containerDiv:{
        height:'100vh',
        display: 'flex',
        justifyContent: 'space-around'
      },

      containerText:{
        width: '49%',
        float:'left'
      },

      containerImg:{
        width: '40%',
        position:'relative',
        textAlign: 'center'
      },

      styleImg:{
        width:'50vmin',
        margin: '10vmin 0 0 0',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      },

      styleH1:{
        color:'white',
        fontSize:'3vw',
        textAlign: 'left'
      },

      styleH2:{
        color:'white',
        fontSize:'1.5vw',
        textAlign: 'left'
      },

      styleH3:{
        color:'rgba(255,255,255,0.5)',
        fontSize:'1.3vw',
        textAlign: 'left'
      },


    },

    portrait:{

      containerDiv:{
        display:'inline-box',
        justifyContent: 'space-around'
      },

      containerText:{
        width: '95vw',
        padding:'2vmin'
      },

      containerImg:{
        width: '99vw',
        textAlign: 'center'
      },

      styleImg:{
        width:'40vmax',
        padding: '10vmin 0 0 0'
      },

      styleH1:{
        color:'white',
        fontSize:'3vh',
      },

      styleH2:{
        color:'white',
        fontSize:'1.5vh',
      },

      styleH3:{
        color:'rgba(255,255,255,0.5)',
        fontSize:'1.3vh',
      }
    },


  };

  componentDidMount = () => {
    this.getStateList();
  };

  getStateList = () => {
    if (this.props.getStore != null || this.props.getStore !== undefined) {
      switch (this.state.type) {
          
        case "popularMovies":
          this.setState({ stateList: this.props.popularMoviesState });
          break;

        case "popularShows":
          this.setState({ stateList: this.props.popularSeriesState });
          break;

        case "genreFamily":
          this.setState({ stateList: this.props.genreFamilyState });
          break;

        case "genreDocumentary":
          this.setState({ stateList: this.props.genreDocumentaryState });
          break;

        case "searched":
          this.setState({ stateList: this.props.searched });
          break;

        default:
          return console.log("no type");
      }
    }
  };

  //On button clicked / load ShakaPlayer.js
  onWatchMovieHandler = () => {
    this.setState({ player: <ShakaPlayer /> });
  };

  render() {

    // Getting screen oriontation from window and apply different styles to make page responsive
    let styleOrientation=null;

    if(window.matchMedia("(orientation: landscape)").matches){
      styleOrientation=this.state.landscape;
    }
    else{
      styleOrientation=this.state.portrait;
    }


    return (
      <Auxx>
        {(this.state.stateList !== null) & (this.state.stateList !== undefined) & (styleOrientation!=null) ? (

          <div style={styleOrientation.containerDiv}>

            <div style={styleOrientation.containerText}>

              <h1 style={styleOrientation.styleH1}>Title:
                    {" "+this.state.stateList[this.state.id].title}</h1>

              <h2 style={styleOrientation.styleH2}>Description: 
                    {" "+this.state.stateList[this.state.id].description}</h2>

              <h3 style={styleOrientation.styleH3}>Genre: 
                    {" "+this.state.stateList[this.state.id].genre_ids}</h3>

              <h3 style={styleOrientation.styleH3}>Original title: 
                    {" "+this.state.stateList[this.state.id].original_title}</h3>

              <h3 style={styleOrientation.styleH3}>Original language: 
                    {" "+this.state.stateList[this.state.id].original_language}</h3>

              <h3 style={styleOrientation.styleH3}>Release date: 
                    {" "+this.state.stateList[this.state.id].release_date}</h3>

              <h3 style={styleOrientation.styleH3}>Vote average: 
                    {" "+this.state.stateList[this.state.id].vote_average}</h3>

              <h3 style={styleOrientation.styleH3}>Vote count: 
                    {" "+this.state.stateList[this.state.id].vote_count}</h3>

              <button style={this.state.styleBtn} onClick={() => this.onWatchMovieHandler()}>Watch Movie</button>
            </div>


            <div style={styleOrientation.containerImg}>

              <img
                style={styleOrientation.styleImg}
                src={this.state.urlBase + this.state.stateList[this.state.id].path}
                alt="Unable to load"
              />
              </div>


          </div>

        ) : null}

        {this.state.player}

      </Auxx>
    );
  }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state => {
  return {
    
    getStore:               
        state.reducerShow,

    popularMoviesState:     
        state.reducerShow.popularMovies,

    popularSeriesState:     
        state.reducerShow.popularSeries,

    genreFamilyState:       
        state.reducerShow.genreFamily,

    genreDocumentaryState:  
        state.reducerShow.genreDocumentary,

    searched:               
        state.reducerSearch.searchedList

  };
};

export default connect(mapStateToProps)(Details);
