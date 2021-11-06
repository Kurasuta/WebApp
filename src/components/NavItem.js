import React from "react";
import {green, white} from "../color";
import {css} from "glamor";
import {Link} from "react-router-dom";

export default function NavItem(props) {
    return (
        <Link {...css({
            color: white + ' !important',
            borderRadius: 3,
            lineHeight: '45px',
            display: 'inline-block',
            textDecoration: 'none',
            paddingLeft: 20,
            paddingRight: 20,
            ':hover': {
                cursor: 'pointer',
                backgroundColor: green,
            }
        })} to={props.to}>
            {props.children}
        </Link>
    );
}
