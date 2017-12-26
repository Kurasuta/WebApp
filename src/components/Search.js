import React from "react";
import Input from "./ui/Input";

export default class Search extends React.Component {
  render() {
    return (
      <Input return={this.props.return} type="text" placeholder="sha256, md5 or sha1"/>
    );
  }
}
