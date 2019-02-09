import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setViewWidth } from "./actions/viewActions";

import Home from "./Components/Home/Home";

import { sendRequest, methods } from "./utils/data";

import "./App.css";
import "./flex.css";
import "./global.css";

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    sendRequest(methods.GET, "http://localhost:8000/test").then(res => {
      console.log("NodeJS Response", res);
    });
  }

  handleResize = () => this.props.setViewWidth(window.innerWidth);

  render() {
    return (
      <div className="App">
        <header className="App-header d-flex">
          <h1 className="mar-0 pad-16">ReactStudioCMS</h1>
        </header>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    );
  }
}
const mS = (state, ownProps) => ({
  isMobile: state.view.isMobile
});

const mD = dispatch =>
  bindActionCreators(
    {
      setViewWidth
    },
    dispatch
  );

export default withRouter(
  connect(
    mS,
    mD
  )(App)
);
