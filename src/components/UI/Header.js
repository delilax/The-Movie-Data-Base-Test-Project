import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const header = () => {
  
  const styleBtns1 = {
    position:'relative',
    padding: '0 0 0 5vmin',
    float:'left',
    cursor: "pointer",
    fontWeight:'bold',
    color: 'white',
    textDecoration: 'none',

  };

  const styleBtns2 = {
    position:'relative',
    padding: '0 5vmin 0 0 ',
    float:'right',
    cursor: "pointer",
    fontWeight:'bold',
    color: 'white',
    textDecoration: 'none'

  };
  return (
    <div className="App-header" >

      <Link style={styleBtns1} to="/">
        Home
      </Link>

      <Link style={styleBtns2} to="/search">
        Search
      </Link>
      
    </div>
  );
};

export default header;
