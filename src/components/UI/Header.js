import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  const styleBtns = {
    cursor: "pointer"
  };
  return (
    <div>

      <Link style={styleBtns} to="/">
        Home
      </Link>

      <Link style={styleBtns} to="/search">
        Search
      </Link>
      
    </div>
  );
};

export default header;
