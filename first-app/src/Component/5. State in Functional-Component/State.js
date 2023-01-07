
import { useState } from 'react';

function State() {
    const [data, setdata] = useState("Imtiyaz");
    
    function updatData() {
        setdata("Imtiyaz is a Front End Developer");
    }

    return (
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updatData}>Updte Data</button>
        </div>
    )
}

export default State