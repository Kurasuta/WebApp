import React from "react";
import {css} from "glamor";

export default function Input(props) {
    return (
        <input {...css({
            padding: 10,
            borderRadius: 2,
            borderWidth: 0,
        })} {...props}/>
    );
}
