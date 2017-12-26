import React from "react";
import Home from "./Home"
import Sample from "./Sample.js";
import SampleList from "./SampleList"
import {white} from "./color.js";
import Header from "./components/Header";
import Loading from "./components/Loading";
import {css} from "glamor";
import KurasutaApi from "./KurasutaApi"

css.global('html, body', {
  backgroundColor: white
});

const VIEW_HOME = 0;
const VIEW_SAMPLE = 1;
const VIEW_SECTION = 2;
const VIEW_LOADING = 3;
export default class App extends React.Component {
  state = {
    view: VIEW_HOME,
    data: undefined,
  };

  render() {
    const showSample = (sha256) => {
      this.setState({view: VIEW_LOADING});
      kurasutaApi.sample(sha256).then((response) => {
        this.setState({view: VIEW_SAMPLE, data: response.data});
      });
    };
    const kurasutaApi = new KurasutaApi();
    let component = null;
    switch (this.state.view) {
      case VIEW_SAMPLE:
        component = <Sample
          sample={this.state.data}
          listBySectionHash={(sha256) => {
            this.setState({view: VIEW_LOADING});
            kurasutaApi.section(sha256).then((response) => {
              this.setState({view: VIEW_SECTION, data: response.data});
            });
          }}
        />;
        break;
      case VIEW_SECTION:
        component = <SampleList showSample={showSample}>{this.state.data}</SampleList>;
        break;
      case VIEW_LOADING:
        component = <Loading/>;
        break;
      default: // VIEW_HOME
        component = <Home showSample={showSample}/>;
    }
    return (
      <div className="App">
        <Header showHome={() => {
          this.setState({view: VIEW_HOME})
        }} search={showSample}/>
        {component}
      </div>
    );
  }
}