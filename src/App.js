import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../src/containers/MainPage';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {

    //Creating routes to components: MainPage and Search (on Header)
    const routes=(
      <Switch>
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
