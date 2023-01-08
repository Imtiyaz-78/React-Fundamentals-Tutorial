
import { Component } from "react";

class Data extends Component {
    render() {
        return (
            <div style={{backgroundColor:"skyblue", margin:10, borderRadius:65}}>
                <h1 > Hello {this.props.name}</h1>
                <h2>{this.props.Email}</h2>
            </div>
        )
    }
}

export default Data;