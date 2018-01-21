import React from "react";
import Home from "./pages/Home"
import Sample from "./pages/Sample.js";
import Section from "./pages/Section"
import {white, blue, darkBlue} from "./color.js";
import Header from "./components/Header";
import {css} from "glamor";
import {ToastContainer} from 'react-toastify';
import Container from "./components/Container";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import People from "./pages/People";
import Footer from "./components/Footer";

css.global('html, body', {backgroundColor: white});
css.global('a', {color: blue});
css.global('a:visited', {color: darkBlue});

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route exact path="/people" component={People}/>
            <Route path="/sample/:hash" component={Sample}/>
            <Route path="/section/:hash" component={Section}/>
          </Container>
          <Footer/>
          <ToastContainer/>
        </div>
      </Router>
    );
  }
}