import React from "react";
import {css} from "glamor";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.return = props.return;
  }

  render() {
    return (
      <input onKeyUp={(event) => {
        if (event.keyCode === 13) {
          if (this.return) this.return(event.target.value);
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
