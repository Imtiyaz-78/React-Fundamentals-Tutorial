import React from 'react'
class Render extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "imtiyazmd803@gmail.com"
        }
    }
    render() {
        console.log("Render method", this.state.email)
        return (
            <div>
                <h1>User Component </h1>
                <button onClick={() => this.setState({ email: "mdimtiyazdeveloper803@gmail.com" })}>Update Email</button>
            </div>
        )
    }
}

export default Render;