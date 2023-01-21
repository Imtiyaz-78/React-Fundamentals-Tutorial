

import React from "react";
import { useRef } from "react";

function UseRefInFunctionalComponent() {
    const myref = useRef(null);

    function myHandelr() {
        myref.current.value = "2000";
        myref.current.style.color = "red";
        myref.current.focus();
    }

    return (
        <div>
            <h1>useRef in Hook in Functional Component</h1>
            <input type="text" ref={myref} />
            <button onClick={myHandelr}> Handle Input</button>
        </div>
    )
}



export default UseRefInFunctionalComponent