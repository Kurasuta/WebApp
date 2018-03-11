import React from "react";
import {css} from "glamor";

export default class LoadingChart extends React.Component {
  render() {
    return <div {...css({height: 320, textAlign: 'center', lineHeight: '320px'})}> Loading... </div>;
  }
}
