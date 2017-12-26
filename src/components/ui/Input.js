import React from "react";
import {css} from "glamor";

export default class Input extends React.Component {
  render() {
    return (
      <input onKeyUp={(event) => {
        if (event.keyCode === 13) {
          if (this.props.return) this.props.return(event.target.value);
        }
      }} {...style}/>
    );
  }
}

const style = css({
  padding: 10,
  borderRadius: 2,
  borderWidth: 0,
});
