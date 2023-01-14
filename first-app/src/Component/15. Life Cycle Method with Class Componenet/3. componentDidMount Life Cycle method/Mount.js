
import React from "react";
import { Component } from 'react'

class Mount extends Component {

    constructor() {
        super();

        this.state = { name: "Imtiyaz" }

        console.log("constructor") // pahle constructor call hota hai 
    }

    componentDidMount() {
        console.log("componentDidMount") // render method ke call hone ke baad componentDidMount call hota hai


    }

    render() {
        console.log("render") // constructor ke baad hamara render method call hota hai

        return (
            <div className="App">
                <h1>Component Did Mount {this.state.name}</h1>
                <button onClick={() => this.setState({ name: "Hey Imtiyaz" })}>Update</button>

            </div>
        );
    }
}

export default Mount;


