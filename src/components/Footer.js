import React from "react";
import Container from "./Container";
import {css} from "glamor";
import Link from "./ui/Link";

export default function Footer() {
    return (
        <Container>
            <ul {...css({
                display: 'flex',
                listStyleType: 'none',
                padding: 0,
                margin: '40px 0 20px 0',
                justifyContent: 'center',
                '> li': {
                    alignSelf: 'center',
                    fontSize: 10
                }
            })}>
                <li><Link to={`/people`}>Contact & Imprint</Link></li>
            </ul>
        </Container>
    );
}