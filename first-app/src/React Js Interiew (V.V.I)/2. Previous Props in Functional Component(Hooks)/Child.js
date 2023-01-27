

import React, { useEffect, useRef } from 'react'

function Child(props) {
    const lastVal = useRef();

    useEffect(() => {
        lastVal.current = props.count;
    })
    const previousProps = lastVal.current;
    return (
        <div>
            <h1>Current Value is : {props.count}</h1>
            <h1>Previous value is  : {previousProps}</h1>

        </div>
    )
}

export default Child