import React from "react";
import {black, green, lightgray, white} from "../../color.js";
import {css} from "glamor";

export default function Table(props) {
    const headers = Object.keys(props.headers);

    return (
        <table {...css({
            width: '100%',
            '> thead > tr > th': {
                backgroundColor: green,
                color: white,
                padding: 10,
            },
            '> tbody > tr:nth-child(2n)': {
                backgroundColor: lightgray
            },
            '> tbody > tr > td': {
                color: black,
                padding: 10,
            }
        })}>
            <thead>
            <tr>
                {headers.map((header, key) => {
                    return <th key={key}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {props.children.map((row, trIndex) => {
                return <tr key={trIndex}>
                    {row.map((cell, tdIndex) => {

                        let inline = {};
                        if (props.headers[headers[tdIndex]] === 'right') {
                            inline = {
                                textAlign: 'right'
                            };
                        }

                        return <td key={tdIndex} style={inline}>{cell}</td>
                    })}
                </tr>
            })}
            </tbody>
        </table>
    );
}
