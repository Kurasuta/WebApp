import React from "react";
import Home from "./pages/Home"
import Sample from "./pages/Sample.js";
import Section from "./pages/Section"
import {white, blue, darkBlue, black} from "./color.js";
import Header from "./components/Header";
import {css} from "glamor";
import {ToastContainer} from 'react-toastify';
import Container from "./components/Container";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
      <BrowserRouter>
        <div>
          <Header/>
          <Container>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/people" element={<People/>}/>
                  <Route exact path="/candy" element={<Candy/>}/>
                  <Route path="sample">
                      <Route path=":hash" element={<Sample/>}/>
                  </Route>
                  <Route path="section">
                      <Route path=":hash" element={<Section/>}/>
                  </Route>
              </Routes>
          </Container>
          <Footer/>
          <ToastContainer/>
          <ReactTooltip/>
        </div>
      </BrowserRouter>
    );
  }
}
