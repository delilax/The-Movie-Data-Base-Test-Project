//Using global function IT, string description od the test, function contatining test logic
//Using Enzyme to test - Create shallow copy
//Use Find to get number of instances of needed elements

import React from 'react';
import {shallow} from 'enzyme';

import Header from '../Header';
import { Link } from "react-router-dom";


it('test Header contain Links', () => {

    const wrapped=shallow(<Header />);

    expect(wrapped.find(Link).length).toEqual(2);

});
