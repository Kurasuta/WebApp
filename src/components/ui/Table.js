import React from "react";
import {black, green, lightgray, white} from "../../color.js";
import {css} from "glamor";

export default class Table extends React.Component {
    render() {
        const headers = Object.keys(this.props.headers);

        return (
            <table {...style}>
                <thead>
                <tr>
                    {headers.map((header, key) => {
                        return <th key={key}>{header}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {this.props.children.map((row, trIndex) => {
                    return <tr key={trIndex}>
                        {row.map((cell, tdIndex) => {

                            let inline = {};
                            if (this.props.headers[headers[tdIndex]] === 'right') {
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
}

const style = css({
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
});
