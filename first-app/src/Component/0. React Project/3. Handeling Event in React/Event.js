
import React, { useState } from 'react';
import Style from './Style.css';

export const Event = () => {

    const green = "green";
    const [bg, setBg] = useState(green);
    const [name, setName] = useState("Cilk me")

    function ChangeBGColor() {
        let newBg = "red";
        setBg(newBg);
        setName("Wow 👍");

    };

    function Bgback() {
        setBg(green);
        setName("Amazing 💯");
    }

    return (
        <>
            <div className='btnc' style={{ backgroundColor: bg }}>
                <h1>Hello</h1>
                <button className='btn' onMouseEnter={ChangeBGColor} onMouseLeave={Bgback}>{name}</button>
            </div>
        </>

    )
}






