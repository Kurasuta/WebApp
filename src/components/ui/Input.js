import React from "react";
import {css} from "glamor";

export default class Input extends React.Component {
  render() {
    return (
      <input {...style} {...this.props}/>
    );
  }
}

const style = css({
  padding: 10,
  borderRadius: 2,
  borderWidth: 0,
});
