import React from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import Loading from "./ui/Loading";
import Link from "./ui/Link";
import Hash from "./ui/Hash";
import Table from "./ui/Table";

export default class NewestHashesList extends React.Component {

  state = {samples: null};

  componentDidMount() {
    new KurasutaApi().newestSamples().then(response => {
      this.setState({samples: response.data});
    }).catch(error => {
      toast.error('API not reachable');
    });
  }

  render() {
    return (
      this.state.samples === null ? <Loading/> :
        <Table headers={{'Hash': 'left', 'Build Time Stamp': 'left'}}>
          {
            this.state.samples.map((sample) => {
              return [
                <Link to={`/sample/` + sample.hash_sha256}>
                  <Hash>{sample.hash_sha256}</Hash>
                </Link>,
                <div>{sample.build_timestamp}</div>
              ]
            })
          }
        </Table>
    );
  }
}
