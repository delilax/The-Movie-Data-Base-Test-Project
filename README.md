The Movie Data Base is test project. 
It uses [The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction) API to get list of movies and show by criteria.

It contains:
    - list of movies/shows, 
    - details of movies/shows and Shaka-Player running HLS stream,
    - Search component.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies:

### React Redux
    State container for JavaScript/React applications.
    [React Redux]: (https://github.com/reduxjs/react-redux.git)

### React Router
    Naavigation components.
    [React Router]: (https://github.com/ReactTraining/react-router.git)

### Redux thunk
    Thunk middleware for Redux. Lets you call action creators that return a function instead of an action object.
    [Redux thunk]: (https://github.com/reduxjs/redux-thunk.git)

### Redux persist
    Persist and rehydrate a redux store.
    [Redux persist]: (https://github.com/rt2zz/redux-persist.git)

### Axios
    Promise based HTTP client for the browser and node.js
    Making HTTP request from browser, Intercept request and response, transform request and response data.
    [Axios]:(https://github.com/axios/axios.git)
    
### Enzyme
    JavaScript Testing utilities for React.
    [Enzyme/Enzyme adapter react 16]: (https://github.com/airbnb/enzyme.git)

### React Multi Carousel
    Production-ready, lightweight fully customizable React carousel component.
    [React Multi Carousel]: (https://github.com/YIZHUANG/react-multi-carousel.git)

### React Loader Spinner
    Provides simple React.js spinner component which can be implemented for async wait operation before data load to the view.
    [React Loader Spinner]: (https://github.com/mhnpd/react-loader-spinner.git)

### Shaka Player
    Shaka Player is an open-source JavaScript library for adaptive media. 
    Includes Shaka player git respositories.
    [Shaka Player]: (https://github.com/google/shaka-player.git)
    [Shaka Player react]: (https://github.com/jcwrightson/shaka-player-react.git)

    Lightweight utilities for inspecting and manipulating video container formats.
    [Mux.js]: (https://github.com/videojs/mux.js.git)


## Content:

### src/index.js
    Contains impelentation of React, Redux, middleware thunk, redux persist. Creation of redux store, combine reduceers and creation of app.

### src/App.js
    In App.js are defined Routes, Layout of application and imported main components: MainPage, Details and Search.

### Components

#### Carousel.js
    Carousel is stateless component.

    Defines React Multi Carousel elements as Link to Details.js and image of movie/show loaded from API response.

    Receiving props: 
        -   state (list of movies/shows loaded from API response to Redux store),
        -   type (Type of movie/show as string, to pass to Details.js).

    Importing: 
        - React Multi Carousel,
        - React Loader Spinner.

#### Header.js and Footer.js
    Header have Links to navigate beetween Home and Search components.

    Footer have description text.

### Containers

#### MainPage.js
    MainPage.js is stateful component.

    Shows multiple carousels with images of movies/shows (Popular movies, Popular series, Family and Documentary)

    MainPage container is connected to Redux store to:
        - trigger action to get data from API response and save it in Redux store,
        - get lists of movies/shows from Redux store and call Carousel.js component to render them.
        
    Importing: 
        - Carousel.js,
        - indexAC.js.


#### Details.js
    Details.js is stateful component.

    Shows details of movie/show (image, title, description and metadata) and button to load shaka player.

    Details container is connected to Redux store to:
        - get lists of movies/shows and details from Redux store and call render them as text and image,
        - containes Shaka Player and starts HLS stream on button click.

    Receiving props (From Carousel.js): 
        - type (Type of movie/show as string and use it in "switch" to get right list from Redux store),
        - id (Id as index of clicked element in array so it can call from array needed details of movie/show).

    Importing: 
        - ShakaPlayer.js,
        - Auxx.js.

#### Search.js
    Search.js is stateful component.

    Shows input element and search button. After loaded list of movies/shows render carousel with images.

    Search container is connected to Redux store to:
        - trigger action to get list from API response and save it in Redux store. Sending text from input (user input) to action as props,
        - get lists of movies/shows from Redux store that contain text from input.
        
    Importing: 
        - Carousel.js,
        - indexAC.js.


#### ShakaPlayer.js
    Search.js is stateful component.

    Most of code is from Shaka player documentation.

    Adding muxjs to window because Shaka player looking for mux in global environment.

    Enabled fullscreen play on start.

    Importing: 
        - Mux.js to enable HLS stream.


### HOC (Higher Order Components)

#### Auxx.js
    Auxx.js is wrapper for elements.

#### Layout.js
    Layout.js wrapped around App to show. Shows Header and Footer.

    Importing: 
        - Header.js,
        - Footer.js.

### Store (actions and reducers)

#### ActionTypes.js
    ActionTypes.js contains constant that is used in action and reducer as type. Eliminates typing errors.

#### getDataMoviesShows.js
    getDataMoviesShows.js contains function to manipulate with response data and prepare it to be stored in redux state add array of objects.

#### indexAC.js
    indexAC.js exporting actions. It is good use beacuse you inport just this where is needed to dispatch to actions (MainPage.js, Search.js)

#### actionShowList.js
    actionShowList.js is Redux action component.
    Use axios to get to API and receive response and errors.
    Manipulate with responses using function in getDataMoviesShows.js
    Dispatch responses to reducers.

    Getting:
    - List of popular movies,
    - List of popular series,
    - List of Family genre,
    - List of Documentary genre,
    - List of genres (use it to show name of genres in Details.js),
    - List of languages (use it to show name of original language in Details.js).

 Importing: 
        - ActionTypes.js
        - getDataMoviesShows.js

#### actionSearchList.js
    actionSearchList.js is Redux action component.
    Use axios to get to API and receive response and errors.
    Manipulate with responses using function in getDataMoviesShows.js
    Dispatch responses to reducers.

    Getting:
    - List of movies/shows by keyword inputed by user.

 Importing: 
        - ActionTypes.js,
        - getDataMoviesShows.js.

#### reducerShowLists.js
    reducerShowLists.js is Redux reducer component.

    Gets triggerd by actions (action.type) and save data into the redux store.

    Storing:
    - List of popular movies,
    - List of popular series,
    - List of Family genre,
    - List of Documentary genre,
    - List of genres,
    - List of languages.

    Importing: 
        - ActionTypes.js

#### reducerSearchLists.js
    reducerSearchLists.js is Redux reducer component.

    Gets triggerd by actions (action.type) and save data into the redux store.

    Storing:
    - List of movies/shows by keyword inputed by user.

    Importing: 
        - ActionTypes.js.

Created by: Delila