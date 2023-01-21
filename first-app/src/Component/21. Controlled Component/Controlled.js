import React, { useState } from "react"

function Controlled() {

    const [getValue, setValue] = useState("100");
    return (
        <div>
            <h1>Controlled Component</h1>
            <h2>{getValue}</h2>
            <input type="text" value={getValue} onChange={(event) => setValue(event.target.value)} />
            {/* <input type="text" defaultValue="123456" onChange={(event) => setValue(event.target.value)} /> */}
        </div>
    )
}

export default Controlled;




