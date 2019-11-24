import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage';
import Details from './containers/Details/Details';


class App extends Component {
  render() {

    //Creating routes to components: MainPage and Search (on Header)
    const routes=(
      <Switch>
        <Route path='/details' component={Details} />
        <Route path='/' exact component={MainPage} />
      </Switch>
    );

    return (
    <div className="App">
      <Layout >
          {routes}
      </Layout>
    </div>
    );
}
};

export default App;
