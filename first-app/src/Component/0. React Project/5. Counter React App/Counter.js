import React, { useState } from 'react';
import Counters from './Counters.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';



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
                <div className='mtl'>
                    <Button onClick={Inc} variant="contained" size="large" className="btn1">

                        <AddIcon />
                    </Button>
                    <Button onClick={Dec} variant="contained" size="large" className="btn2">

                        <RemoveIcon />
                    </Button>
                </div>


            </div>
        </>
    )
}

export default Counter;
