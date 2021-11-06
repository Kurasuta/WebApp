import React from "react";
import Input from "./ui/Input";

export default class Search extends React.Component {
    render() {
        return (
            <Input size="64" onKeyUp={(event) => {
                if (event.keyCode === 13) {
                    // this.props.history.push('/sample/' + event.target.value);
                }
            }} type="text" placeholder="SHA256, MD5 or SHA1"/>
        );
    }
}
