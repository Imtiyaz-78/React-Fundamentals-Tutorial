import React, { useState } from 'react'
import Styles from './Styles.css'



const UseState = () => {

    const [count, setCount] = useState(0);

    const IncBTN = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className='cnt'>


                <h1>{count}</h1>
                <button className='btn' onClick={IncBTN}>Click me</button>

            </div>

        </>
    )
}

export default UseState;