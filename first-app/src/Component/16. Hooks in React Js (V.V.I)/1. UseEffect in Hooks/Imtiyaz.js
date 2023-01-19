
import React, { useEffect, useState } from 'react'

function Imtiyaz() {

    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect called");
    })


    return (
        <div>
            <h1>Use effect in React (16.8 Version) {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click for update the Data</button>

        </div>
    )
}



export default Imtiyaz;