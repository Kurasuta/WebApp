import React from "react";
import Table from "../components/ui/Table";
import Hash from "../components/ui/Hash";
import Link from "../components/ui/Link";
import KurasutaApi from "../KurasutaApi";
import Loading from "../components/ui/Loading";

export default class Section extends React.Component {

  state = {
    section: null
  };

  componentDidMount() {
    const sha256 = this.props.match.params.hash;

    const kurasutaApi = new KurasutaApi();

    kurasutaApi.section(sha256).then((response) => {
      this.setState({section: response.data});
    });
  }

  render() {
    if (!this.state.section) {
      return <Loading/>
    }

    return (
      <Table headers={{'Hash': 'left', 'Build Time Stamp': 'left'}}>
        {
          this.state.section.samples.map((sample) => {
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
