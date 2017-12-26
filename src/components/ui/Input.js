import React from "react";
import {css} from "glamor";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.hitReturn = props.hitReturn;
  }

  render() {
    return (
      <input onKeyUp={(event) => {
        if (event.keyCode === 13) {
          if (this.hitReturn) this.hitReturn(event.target.value);
        }
      }} {...style} {...this.props}/>
    );
  }
}

const style = css({
  padding: 10,
  borderRadius: 2,
  borderWidth: 0,
});
