// Layout component wrapped around app...to show Header and Footer everyware
import React, { Component } from "react";
import Auxx from "./Auxx";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

class Layout extends Component {
  render() {
    return (
      <Auxx>
        <Header />
        {this.props.children}
        <Footer />
      </Auxx>
    );
  }
}

export default Layout;
