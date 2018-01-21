import React from "react";
import Container from "./Container";
import {css} from "glamor";
import Link from "./ui/Link";

export default class Footer extends React.Component {
  render() {
    return (
        <Container>
          <ul {...gridContainerStyle}>
            <li><Link to={`/people`}>Contact & Imprint</Link></li>
          </ul>
        </Container>
    );
  }
}

const gridContainerStyle = css({
  display: 'flex',
  listStyleType: 'none',
  padding: 0,
  margin: '40px 0 20px 0',
  justifyContent: 'center',
  '> li': {
    alignSelf: 'center',
    fontSize: 10
  }
});
