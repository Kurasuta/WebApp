import React from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import SampleList from "./ui/SampleList";

export default class RandomHashesList extends React.Component {

  state = {samples: null};

  componentDidMount() {
    new KurasutaApi().randomSamples(10).then(response => {
      this.setState({samples: response.data});
    }).catch(error => {
      toast.error('API not reachable');
    });
  }

  render() {
    return <SampleList>{this.state.samples}</SampleList>;
  }
}
