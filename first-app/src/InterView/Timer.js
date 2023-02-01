import React, { useState } from 'react'

const Timer = () => {

    const [timer, settimer] = useState('00:00:00');

    const Timers = () => {
       settimer('00:00:00');
    }

    return (

        <>
            <div className='timer'>

                <button onClick={Timers}>Timer</button>

            </div>
        </>
    )
}

export default Timer;
