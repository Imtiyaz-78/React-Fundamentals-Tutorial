
import React, { useState } from 'react'
import Users from './Users';

function UseEffectWithStateAndProps() {
    const [getData, setData] = useState(10);
    const [getCount, setCount] = useState(100);


    useState(() => {
        console.log("useEffect");
    })

    return (
        <div>
            <Users getData={getData} getCount={getCount}  />
            <button onClick={() => setCount(getCount + 1)}>Update Count</button>
            <button onClick={() => setData(getData + 1)}> Update Data </button>

        </div>
    )
}
export default UseEffectWithStateAndProps;