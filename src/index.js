import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// importing router components
import {BrowserRouter} from 'react-router-dom';

//importing redux components
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import reducerShowMovies from './store/reducers/reducerShowMovies';

import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Combine reducers
const rootReducer = combineReducers({
    reducerShow:reducerShowMovies
});

//Create store with midleware
const store=createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

//Creating app with redux and router enabled
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
