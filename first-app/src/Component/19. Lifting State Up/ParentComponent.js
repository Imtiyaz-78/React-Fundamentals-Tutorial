

import React from 'react'
import ChildComponent from './ChildComponent';


function ParentComponent() {
    function kuchhbhi(data) { // data ek props hai jo child componenet se bhej rahe hai
        console.log(data)
        alert(data)
    }

    return (
        <div className="App">
            <h1>Lifting State Up (Parent Component)</h1>
            <ChildComponent getDatas={kuchhbhi} />
        </div>
    );
}

export default ParentComponent;


