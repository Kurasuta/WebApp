import React from "react";

export default class Container extends React.Component {
  render() {
    let style = {
      maxWidth: '960px',
      marginLeft: 'auto',
      marginRight: 'auto'
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
