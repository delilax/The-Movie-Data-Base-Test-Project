//Using global function IT, string description od the test, function contatining test logic
//Using Enzyme to test - Create shallow copy
//Use Find to get number of instances of needed elements


import React from 'react';
import {shallow} from 'enzyme';

import Footer from '../Footer';


it('test Footer contain divs', () => {

const wrapped=shallow(<Footer />);

});
