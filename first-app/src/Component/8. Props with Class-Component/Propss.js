
import React from "react";


export default class Propss extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{ backgroundColor: "skyblue", margin: 10, }}>
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>

            </div>
        )
    }
}