import React from "react";
import Table from "./components/ui/Table";
import formatEntropy from "./utils";

export default class SectionTable extends React.Component {
  render() {
    return (
      <Table
        headers={{
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