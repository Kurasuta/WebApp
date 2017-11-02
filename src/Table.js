import React from 'react';
import color from './color.js'

class Table extends React.Component {
    render() {
        const cellStyle = {
            padding: 4,
        };
        const headStyle = {
            backgroundColor: color.link,
        };
        return (
            <table>
                <thead style={headStyle}>
                <tr>
                    {this.props.headers.map((header, key) => {
                        return <th key={key}>{header}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {this.props.children.map((row, trIndex) => {
                    const rowStyle = {
                        backgroundColor: trIndex % 2 ? color.inactive : 'transparent',
                    };
                    return <tr style={rowStyle} key={trIndex}>
                        {row.map((cell, tdIndex) => {
                            const style = Object.assign({}, cellStyle);
                            if (this.props.rightAlign && this.props.rightAlign.indexOf(tdIndex) !== -1) {
                                style['textAlign'] = 'right';
                            }
                            return <td key={tdIndex} style={style}>{cell}</td>
                        })}
                    </tr>
                })}
                </tbody>
            </table>
        );
    }
}

export default Table;
