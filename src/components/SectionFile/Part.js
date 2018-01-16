import React from "react";
import {css} from "glamor";
import {lightgray} from "../../color";

export default function Part({left, center, right}) {
  return (
    <div {...container}>

      <div {...leftStyle}>
        <div {...name}>
          {left()}
        </div>
      </div>

      <div {...centerStyle}>
        {center()}
      </div>

      <div {...rightStyle}>
        {right()}
      </div>

    </div>
  );
}

const container = css({
  padding: 10,
  height: 60,
  display: 'flex',
  borderBottom: '1px solid black',
  ':hover': {
    backgroundColor: lightgray
  }
});

const leftStyle = css({
  width: 40,
});

const centerStyle = css({
  flexGrow: 10
});

const rightStyle = css({
  width: 20,
});

const name = css({
  transform: 'rotate(90deg) ',
  transformOrigin: 'left top',
  marginLeft: 10,
  height: 20,
  width: 60,
  textAlign: 'center'
});


