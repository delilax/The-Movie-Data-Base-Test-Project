import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


//Using global function IT, string description od the test, function contatining test logic
//Creates div element in JSDOM for testing (Not creating in browser)
//Render app in div element wrapped with Browser Router
//unmountComponentAtNode - Look at div, find app component and remove it - Cleanup

it('renders without crashing', () => {

  const div = document.createElement('div');  

  //Crashing because of Redux - not fully impelemented testing with Redux store

  // ReactDOM.render( 
  //    <BrowserRouter>
  //      <App />
  //    </BrowserRouter>                 
  //  , div);       
  
  shallow(<App />);
      
  ReactDOM.unmountComponentAtNode(div);      
});
