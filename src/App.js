import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout";
import MainPage from "./containers/MainPage";
import Details from "./containers/Details";
import Search from "./containers/Search";

class App extends Component {
  render() {
    //Creating routes to components
    const routes = (
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/details" component={Details} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
