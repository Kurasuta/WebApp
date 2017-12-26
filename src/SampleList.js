import React from "react";
import Table from "./components/ui/Table";
import Hash from "./components/ui/Hash";
import Link from "./components/ui/Link";

export default class SampleList extends React.Component {
  render() {
    return (
      <Table headers={{'Hash': 'left', 'Build Time Stamp': 'left'}}>
        {
          this.props.children.map((sample) => {
            return [
              <Link onClick={() => {
                this.props.showSample(sample.hash_sha256)
              }}>
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
