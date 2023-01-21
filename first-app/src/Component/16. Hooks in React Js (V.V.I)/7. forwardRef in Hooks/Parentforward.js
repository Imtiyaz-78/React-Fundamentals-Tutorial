import React, { useRef } from 'react';

import ChildComponent from './ChildComponent';

function Parentforward() {

    const myref = useRef(null);

    function updateInput() {
        myref.current.value = "2000";
        myref.current.style.color = "red";
        myref.current.style.fontSize = "30px";
    }

    return (
        <div>
            <h1>forwardRef in React Hook</h1>
            <ChildComponent ref={myref} />
            <button onClick={updateInput}>Update InputBox</button>

        </div>
    )
}


export default Parentforward;