import React from 'react';

import CarouselComponent from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = (props) =>{

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 8,
          slidesToSlide: 3,

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
        },
      };

    const url1="http://image.tmdb.org/t/p/w342";
    let carousel=<div>...</div>; //Spinner

    if (props.state!=null){
        carousel=
        <CarouselComponent  responsive={responsive}   >
              {props.state.map(event=>(              
                  <div key={event.id}>
                    <img  width='90%' src={url1+event.path} alt="Unable to load"/>
                  </div>
              ))}

        </CarouselComponent>
    }
    
    return(
        <div>
            <div>{carousel}</div>
        </div>
    )
}

export default Carousel;
