
import React from "react";
import  {Component} from 'react'
class Mount extends Component {
    constructor() {
        super();
        console.log("constructor")
        this.state = { name: "anil" }
    }
    componentDidMount() {
        console.log("componentDidMount")

    }
    render() {
        console.log("render")

        return (
            <div className="App">
                <h1>Component Did Mount {this.state.name}</h1>
                <button onClick={() => this.setState({ name: "Sidhu" })}>Update</button>
            </div>
        );
    }
}

export default Mount;
