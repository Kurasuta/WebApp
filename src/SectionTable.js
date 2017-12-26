import React from "react";
import Table from "./components/ui/Table";
import formatEntropy from "./utils";
import Hash from "./components/ui/Hash";
import Link from "./components/ui/Link"

export default class SectionTable extends React.Component {
  render() {
    return (
      <Table
        headers={{
          'Hash': 'left',
          'Name': 'left',
          'Entropy': 'left',
          'VAddr': 'right',
          'VSize': 'right',
          'RSize': 'right'
        }}
      >
        {
          this.props.children.map((section) => {
            return [
              <Link onClick={() => {
                this.props.listBySectionHash(section.hash_sha256);
              }}><Hash>{section.hash_sha256}</Hash></Link>,
              section.name,
              formatEntropy(section.entropy),
              section.virtual_address,
              section.virtual_size,
              section.raw_size
            ]
          })
        }
      </Table>
    );
  }
}