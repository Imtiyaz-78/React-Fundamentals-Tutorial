import React, { useState } from 'react';
import Counters from './Counters.css';
import AddIcon from '@mui/icons-material/Add';

const Counter = () => {

    const [count, setCount] = useState(0);

    const Inc = () => {
        setCount(count + 1);
    };


    const Dec = () => {
        if (count > 0) {
            setCount(count - 1);
        } 
        else {
            alert("Sorry Now We con't Dec...")
            setCount(0);
        }

    }



    return (
        <>
            <div className='container'>

                <h1>Counter Application</h1>

                <h1 className='cnt'>{count}</h1>

                <button className='btn1' onClick={Inc}>
                    < AddIcon />
                </button>

                <button className='btn2' onClick={Dec}>
                    < AddIcon />
                </button>


            </div>
        </>
    )
}

export default Counter;
