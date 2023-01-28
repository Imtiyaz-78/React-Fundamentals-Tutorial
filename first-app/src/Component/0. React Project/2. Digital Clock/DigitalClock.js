import React, { useState } from 'react'
import Style from './Style.css'

export const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();

    const [cTime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);

    };

    setInterval(UpdateTime,1000)

    return (
        <>
            <h1>{cTime}</h1>
        </>
    )
}
