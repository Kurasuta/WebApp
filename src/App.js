import React from "react";
import Sample from "./Sample.js";
import {white} from "./color.js";
import Header from "./components/Header";
import {css} from "glamor";

css.global('html, body', {
  backgroundColor: white
});

export default class App extends React.Component {
  render() {
    const sample = require('./data/output-2.json');
    return (
      <div className="App">
        <Header/>
        <Sample sample={sample}/>
      </div>
    );
  }
}