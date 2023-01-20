

import React from 'react';
import first from './first.css';
import Style from './custom.module.css'


function First() {
    return (
        <div>
            <h1 style={{ backgroundColor: "red", color: "white" }}> Inline CSS Method 1</h1>
            <h1 className="Primary" > External CSS Method 2</h1>
            <h1  className={Style.success} > Style Type 3 Module</h1>
        </div>
    )
}
export default First;




