import React, { useState } from 'react'
import Style from './Style.css';

export const Time = () => {
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setCurrentTime] = useState(newTime);

    function UpdateTime() {

        newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }

    return (
        <>
            <h1>Time on Refreshing</h1>
            <div className='btnc'>
                <h1>{cTime}</h1>
                <button className='btn' onClick={UpdateTime}>GET TIME</button>
            </div>


        </>
    )
}
