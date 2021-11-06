import React from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import SampleList from "./ui/SampleList";

export default class NewestHashesList extends React.Component {

    state = {samples: null};

    componentDidMount() {
        new KurasutaApi().newestSamples(10).then(response => {
            this.setState({samples: response.data});
        }).catch(error => {
            toast.error('API not reachable');
        });
    }

    render() {
        return <SampleList>{this.state.samples}</SampleList>;
    }
}
