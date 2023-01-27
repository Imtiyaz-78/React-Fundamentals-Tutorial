

import React from 'react'
import Child from './Child'
function Parent() {
    const [count, setCount] = React.useState(0)
    return (
        <div className="App">
            <Child count={count} />
            <button onClick={() => { setCount(Math.floor(Math.random() * 10)) }} >Update Counter</button>
        </div>
    );
}



export default Parent;
