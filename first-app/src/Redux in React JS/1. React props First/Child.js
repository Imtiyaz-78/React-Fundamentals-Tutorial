
import React from 'react'

const Child = (props) => {
   
    return (
        <>
            <h1>Child Component</h1>
            <h2>{props.data.name}</h2>
            <h2>{props.data.age}</h2>

        </>
    )
}

export default Child;
