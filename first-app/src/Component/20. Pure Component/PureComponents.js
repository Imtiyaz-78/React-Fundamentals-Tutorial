import { Component } from "react";
/*
// This is Normal Component
class PureComponents extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }
    render() {
        console.log("check re-rendering");
        return (
            <div>
                <h1>Pure Component {this.state.count}</h1>
                <button onClick={() => this.setState({ count: 1 })}>Update Data</button>
            </div>
        )
    }

}

export default PureComponents;
*/

// Exampl of PureComponent.
import { PureComponent  } from "react";
class PureComponents extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }
    render() {
        console.log("check re-rendering");
        return (
            <div>
                <h1>Pure Component {this.state.count}</h1>
                <button onClick={() => this.setState({ count:this.state.count+1 })}>Update Data</button>
            </div>
        )
    }

}

export default PureComponents;