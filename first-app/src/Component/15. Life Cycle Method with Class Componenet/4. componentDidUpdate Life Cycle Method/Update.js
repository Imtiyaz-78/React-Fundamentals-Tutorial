import React, { Component } from 'react'

class Update extends Component {
    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            counter: 0
        }
    }

    componentDidUpdate(preProp, preState, snapshort) {
        console.log("componentDidUpdate", preState.counter, this.state.counter)
        if(preState.counter=== this.state.counter){
            alert("Data is already Same");
        }
    }


    render() {
        console.log("render");
        return (
            <div>
                <h1>Component Did update {this.state.counter}</h1>
                <button onClick={() => { this.setState({ counter:  1 }) }}>Update</button>
            </div>
        )
    }
}

export default Update;


