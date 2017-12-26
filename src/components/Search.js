import React from "react";
import Input from "./ui/Input";

export default class Search extends React.Component {
  render() {
    return (
      <Input onKeyUp={(event) => {
        if (event.keyCode === 13) {
          if (this.props.return) this.props.return(event.target.value);
        }
      }} type="text" placeholder="sha256, md5 or sha1"/>
    );
  }
}
