import { useState } from "react";
import React from "react";


function StateWithObj() {
    const [data, setData] = useState({ name: "Imtiyaz", age: 786 });

    return (
        <>
            <h1>State Object with Hooks</h1>

            {/* <input type="text" placeholder="Enter Name" value={data.name} onChange={(e) => { setData({ age: data.age, name: e.target.value }) }} />

            <input type="text" placeholder="Enter age" value={data.age} onChange={(e) => { setData({ name: data.name, age: e.target.value }) }} /> */}



            {/* 2. Other Method */}
            <input type="text" placeholder="Enter Name" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />

            <input type="text" placeholder="Enter age" value={data.age} onChange={(e) => { setData({ ...data, age: e.target.value }) }} />



            <h1>{data.name}</h1>
            <h1>{data.age}</h1>

        </>
    )

}

export default StateWithObj;