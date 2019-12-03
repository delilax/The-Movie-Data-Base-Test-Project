import React from "react";
import CarouselComponent from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";

const Carousel = props => {
  // Make Carousel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 3
    }
  };

  // Style of button over carousel (image in carousel) to enable onClick that is not supported in div or image component in imported Carousel
  const buttonStyle = {
    background: "rgba(0,0,0,0)",
    padding: 0,
    border: 0,
    borderColor: "rgba(0,0,0,0)",
    cursor: "pointer",
    outline: "none"
  };

  //hardcoded part of url...rest of url geting from API
  const url1 = "http://image.tmdb.org/t/p/w342";

  // Spinner implementation to show while loading content
  let carousel = (
    <Loader
      type="ThreeDots"
      color="rgb(155, 30, 45)"
      height={10}
      width={50}
      timeout={30000}
    />
  );

  // Checking if state in redux is downloaded from API. If data is loaded it can map the state
  // Loading CarouselComponent installed by "react-multi-carousel"
  // Mapping elements of array to get data and generate Carousel
  // Create "Link" as elements in carousel. Showing image in carousel inside Link element

  if (props.state != null) {
    carousel = (
      <CarouselComponent responsive={responsive}>
        {props.state.map(event => (
          <Link
            style={buttonStyle}
            key={event.id}
            to={{
              pathname: "/details",
              state: { type: props.type, id: event.id }
            }}
          >
            <img
              style={{
                boxShadow:
                  "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)"
              }}
              width="90%"
              src={url1 + event.path}
              alt="Unable to load"
              key={event.id}
            />
          </Link>
        ))}
      </CarouselComponent>
    );
  }

  return <div>{carousel}</div>;
};

export default Carousel;
