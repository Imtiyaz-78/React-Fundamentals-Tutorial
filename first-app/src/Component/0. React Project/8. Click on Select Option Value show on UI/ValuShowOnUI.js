import React, { useState } from 'react';

const ValuShowOnUI = () => {

    const [num, setNum] = useState();
    return (

        <>
            <h1>You are Select the Value {num} </h1>
            <div>
                <select value = {num} onChange={(event) => {
                    setNum(event.target.value)
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>

        </>
    )
}

export default ValuShowOnUI;
