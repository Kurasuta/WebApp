import React from "react";
import Home from "./pages/Home"
import Sample from "./pages/Sample.js";
import Section from "./pages/Section"
import {white} from "./color.js";
import Header from "./components/Header";
import {css} from "glamor";
import {ToastContainer} from 'react-toastify';
import Container from "./components/Container";
import {BrowserRouter as Router, Route} from 'react-router-dom'

css.global('html, body', {
  backgroundColor: white
});

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route path="/sample/:hash" component={Sample}/>
            <Route path="/section/:hash" component={Section}/>
          </Container>
          <ToastContainer/>
        </div>
      </Router>
    );
  }
}