import React from "react";
import {css} from "glamor";
import {Link as BaseLink} from "react-router-dom";

export default function Link(props) {
    return (
        <BaseLink {...css({
            textDecoration: 'none',
            ':hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
            }
        })} to={props.to}>
            {props.children}
        </BaseLink>
    );
}
