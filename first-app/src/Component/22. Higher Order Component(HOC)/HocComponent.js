
import React, { useState } from "react"

function HocComponent() {

    return (
        <div>
            <h1>Higher Order Component</h1>
            <HOCred cmp={Counter} />
            <HOCgreen cmp={Counter} />
            < HOCaqua cmp={Counter} /> // cmp stands for component kuchh bhi according to you
        </div>
    );
}



function HOCred(props) {
    return (
        <h2 style={{ backgroundColor: "Red", width: 300, color: "black" }} >Red<props.cmp /></h2>
    )

}



function HOCgreen(props) {
    return (
        <h1 style={{ backgroundColor: "green", width: 300, color: "black" }} >Green<props.cmp /></h1>
    )

}



function HOCaqua(props) {
    return (
        <h1 style={{ backgroundColor: "aqua", width: 300, color: "black" }} >Aqua<props.cmp /></h1>
    )

}


function Counter() {
    const [getCounter, setCounter] = useState(0);

    return (
        <div>
            <h1 >{getCounter}</h1>
            <button onClick={() => setCounter(getCounter + 1)}>Click</button>
        </div>
    )
}




export default HocComponent;



