
import React, { useRef } from 'react'

function Uncontrolled() {
    const myref1 = useRef(null);
    const myref2 = useRef(null);

    function handleform(e){
        e.preventDefault();
        console.log("input field 1 value", myref1.current.value);
        console.log("input field 2 value", myref2.current.value);
        const field3 = document.getElementById("field3").value;
        console.log("input field 3 value" , field3)
    }
    return (
        <div>
            <h1>Uncontrolled component</h1>
            <form onSubmit={handleform}>
                <input type="text" ref={myref1} /><br/>
                <input type="text" ref={myref2} /><br/>
                <input id='field3' type="text" ref={myref2} /><br/>
                <button>Submit</button>
            </form>

        </div>
    )
}


export default Uncontrolled