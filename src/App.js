import React from "react";
import Home from "./pages/Home"
import Sample from "./pages/Sample.js";
import Section from "./pages/Section"
import {white, blue, darkBlue, black} from "./color.js";
import Header from "./components/Header";
import {css} from "glamor";
import {ToastContainer} from 'react-toastify';
import Container from "./components/Container";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import People from "./pages/People";
import Footer from "./components/Footer";
import Candy from "./pages/Candy";
import ReactTooltip from 'react-tooltip'

css.global('html, body', {backgroundColor: white});
css.global('a', {color: blue});
css.global('a:visited', {color: darkBlue});
css.global('.c3-tooltip-container', {
  backgroundColor: white,
  border: '1px solid ' + black,
  borderRadius: 4
});

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route exact path="/people" component={People}/>
            <Route exact path="/candy" component={Candy}/>
            <Route path="/sample/:hash" component={Sample}/>
            <Route path="/section/:hash" component={Section}/>
          </Container>
          <Footer/>
          <ToastContainer/>
          <ReactTooltip/>
        </div>
      </Router>
    );
  }
}
