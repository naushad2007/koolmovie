/* global document */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { mapDispachToProps } from "./utils/MapToProps";

import apiConnect from "./services/ApiConnect";
import FrontPage from "./FrontPage";
import MovieFullView from "./MovieFullView";
import GenresPage from "./components/GenresPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../css/common.pcss";
import "../css/layout.pcss";
import "../css/material-icons.pcss";
import "../css/mixins.pcss";

const About = () => (
  <h1>
    This product uses the TMDb API but is not endorsed or certified by TMDb.
  </h1>
);
const NotFound = () => <h1>404.. Whoops, page not found!</h1>;

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => this.props.setConfig(config));
  }

  render() {
    const { location, history } = this.props;
    return (
      <div>
        <Header />
        <TransitionGroup className="page-wrapper">
          <CSSTransition
            key={location.key}
            classNames={
              history.action === "POP"
                ? "transition-back"
                : "transition-forward"
            }
            timeout={1000}
          >
            <Switch location={location}>
              <Route exact path="/" component={FrontPage} />
              <Route exact path="/about" component={About} />
              <Route
                path="/movie/:id"
                render={props => (
                  <MovieFullView {...props} key={props.match.params.id} />
                )}
              />
              <Route
                path="/genres/:id"
                render={props => (
                  <GenresPage {...props} key={props.match.params.id} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispachToProps)(App));