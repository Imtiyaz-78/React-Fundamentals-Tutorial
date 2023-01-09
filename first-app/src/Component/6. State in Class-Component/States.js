
import React, { Component } from 'react';

class States extends Component {
    constructor() {
        super();
        this.state = {
             Data: 0,
         }
    }

    Call() { // This is a function 
        this.setState({ Data: (this.state.Data + 1) })
    };
    
    render() {
        return (
            <div>
                <h1>{this.state.Data}</h1>
                <button onClick={() => this.Call()}>Update Data</button>
            </div>
        );
    }
}


export default States;


