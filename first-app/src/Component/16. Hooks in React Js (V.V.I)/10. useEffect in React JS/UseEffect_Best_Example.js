import React, { useEffect, useState } from 'react'

const UseEffect_Best_Example = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        alert("Counter Button Clicked")
    }, [count1]);

    return (
        <>
            <button onClick={() => setCount1(count1 + 1)} style={{ fontSize: "25px", marginTop: "80px", margin: "21px" }}>Counter One {count1}</button>

            <button onClick={() => setCount2(count2 + 1)} style={{ fontSize: "25px", marginTop: "80px" }}>Counter Two {count2}</button>

        </>
    )
}

export default UseEffect_Best_Example;




