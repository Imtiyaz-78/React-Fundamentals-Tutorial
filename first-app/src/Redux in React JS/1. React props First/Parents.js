
import React from 'react'
import Child from './Child'

const Parents = () => {
    return (
        <>
            <h1>Parent Component</h1>
            <Child data = {{ name: 'Imtiyaz', age: 22 }} />
        </>
    )
}

export default Parents;
