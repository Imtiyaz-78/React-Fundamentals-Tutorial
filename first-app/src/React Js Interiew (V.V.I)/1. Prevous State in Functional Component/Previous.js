
import React, { useState } from 'react'
function Previous() {
    const [count, setCount] = useState(0)
    function updateCounter() {

        // 1. This is First Method
        // let item=Math.floor(Math.random()*10)
        // setCount((pre)=>{
        //   if(pre<3)
        //   {
        //     alert("last value is very low")
        //   }
        //   return item
        // })

        
        // 2. This is First Method
        for (let i = 0; i < 5; i++) {
            setCount((pre) => pre + 1)
        }
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={updateCounter}>Click Me to Update counter</button>
        </div>
    );
}
export default Previous;