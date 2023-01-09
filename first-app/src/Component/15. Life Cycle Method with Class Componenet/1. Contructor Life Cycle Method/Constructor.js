
import React, { Component } from "react";

class Constuctor extends Component {
    constructor() {
        super();
        this.state = {
            Data: "Imtiyaz",

        }
       
    }
  

    render() {
        return (
            <div>
                <h1>Hello {this.state.Data}</h1>
            </div>

        )
    }

}

export default Constuctor;