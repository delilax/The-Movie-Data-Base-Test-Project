import React, {useState} from 'react';

import CarouselComponent from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Redirect} from 'react-router-dom';

const Carousel = (props) =>{
    const inputState = useState({redirect:'/', type:'string type', id:'string id'});

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

    const buttonStyle={
        background:'rgba(0,0,0,0)',
        border:0,
        padding:0,
        cursor:'pointer',
        borderColor: 'rgba(0,0,0,0)',
        outline:'none'
 
    };

    const url1="http://image.tmdb.org/t/p/w342";
    let carousel=<div>...</div>; //Spinner

    if (props.state!=null){
        carousel=
    <CarouselComponent  
        responsive={responsive}       
        >
              {props.state.map(event=>(
                  <button style={buttonStyle} key={event.id}onClick={()=>{
                        console.log(event.id+" "+props.type);
                        inputState[1]({redirect:'/details',type:props.type,id:event.id});
                        }}>


                    <img  width='90%' src={url1+event.path} alt="Unable to load" key={event.id}/>
                    </button>
              ))}
        </CarouselComponent>
    }
    
    return(
        <div>
            <div>{carousel}</div>
            <Redirect to={{
                        pathname:inputState[0].redirect,
                        state:{type:inputState[0].type,
                                id:inputState[0].id}
                        }} />
            
        </div>
    )
}

export default Carousel;
