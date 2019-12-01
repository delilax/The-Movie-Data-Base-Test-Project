//Using global function IT, string description od the test, function contatining test logic
//Using Enzyme to test - Create shallow copy
//Use Find to get number of instances of needed elements

// Doesn't have child component "CarouselComponent" before calling from another component and receiving props (state,type)

import React from 'react';
import {shallow} from 'enzyme';

import Carousel from '../Carousel';
import CarouselComponent from "react-multi-carousel";


it('test Carousel to contain components', () => {

    const wrapped=shallow(<Carousel />);

    expect(wrapped.find(CarouselComponent).length).toEqual(0);

});
