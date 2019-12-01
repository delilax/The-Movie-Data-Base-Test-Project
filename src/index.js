
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
import reducerShowList from './store/reducers/reducerShowLists';
import reducerSearchList from './store/reducers/reducerSearchList';

// importing redux-persist to save redux state after reloading a page
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

// importing and implementing redux-thunk to enable action creator to return function insted of object (for dispatch method)
import thunk from 'redux-thunk';


//Redux DevTools extension. Enable to see redux state in browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Combine multiple reducers
const rootReducer = combineReducers({
    reducerShow:reducerShowList,
    reducerSearch:reducerSearchList
});

//Persist configuration
const persistConfig = {
    key: 'root',
    storage,
  }

//Combining persist configuration and reducers
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Create store
const store=createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));

let persistor = persistStore(store)

//Creating app with redux, router and persist store enabled
const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PersistGate>
     </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();