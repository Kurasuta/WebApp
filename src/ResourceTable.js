import React from "react";
import Table from "./components/ui/Table";
import formatEntropy from "./utils";

export default class ResourceTable extends React.Component {
  render() {
    return (
      <Table headers={{
        'Type': 'left',
        'Name': 'left',
        'Language': 'left',
        'Size': 'left',
        'Offset': 'left',
        'Entropy': 'left'
      }}>
        {
          this.props.children.map((resource) => {
            return [
              combineStrAndId(resource.type_str, resource.type_id),
              combineStrAndId(resource.name_str, resource.name_id),
              combineStrAndId(resource.language_str, resource.language_id),
              resource.size,
              resource.offset,
              formatEntropy(resource.entropy),
            ]
          })
        }
      </Table>
    );
  }
}

function combineStrAndId(str, id) {
  if (str === undefined) {
    return id;
  }

  return str + ' (' + id + ')';
}