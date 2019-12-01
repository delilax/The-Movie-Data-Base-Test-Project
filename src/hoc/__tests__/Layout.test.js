//Using global function IT, string description od the test, function contatining test logic
//Using Enzyme to test - Create shallow copy
//Use Find to get number of instances of needed elements

import React from 'react';
import {shallow} from 'enzyme';

import Layout from '../Layout';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

//Inside beforeEach() writting same code that is executed before each statement in "it" in this file
let wrapped;

beforeEach(()=>{
    wrapped=shallow(<Layout />);
});

it('test number of shown Header', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});

it('test number of shown Footer', () => {
    expect(wrapped.find(Footer).length).toEqual(1);

});
