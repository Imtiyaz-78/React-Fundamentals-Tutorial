
import React, { useState } from 'react';
import './HideandShow.css'

function HideAndShow() {

    const [HideStatus, ShowStatus] = useState(true)
    return (

        <div className='container'>
            {HideStatus ? <h1>Hello World</h1> : null}

            <button className='btn1' onClick={() => ShowStatus(false) }>Hide</button>
            <button className='btn2' onClick={() => ShowStatus(true)}>Show</button>
             
             {/* comments:- This is for Single Button Toggale Bar */}
            {/* <button onClick={() => ShowStatus(!HideStatus)}>Toggle</button> */}

        </div>
    )
}

export default HideAndShow;