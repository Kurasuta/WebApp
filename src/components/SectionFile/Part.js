import React from "react";
import {css} from "glamor";
import {lightgray} from "../../color";

export default function Part({left, center, right}) {
    return (
        <div {...css({
            padding: 10,
            minHeight: 60,
            display: 'flex',
            borderBottom: '1px solid black',
            ':hover': {
                backgroundColor: lightgray
            }
        })}>
            <div {...css({width: 30})}>
                <div {...css({
                    transform: 'translate(-60px) rotate(-90deg)',
                    transformOrigin: '100% 0',
                    height: 20,
                    width: 60,
                    textAlign: 'center'
                })}>
                    {left()}
                </div>
            </div>
            <div {...css({flexGrow: 10})}>
                {center()}
            </div>
            <div {...css({width: 20, paddingLeft: 5})}>
                {right()}
            </div>
        </div>
    );
}
