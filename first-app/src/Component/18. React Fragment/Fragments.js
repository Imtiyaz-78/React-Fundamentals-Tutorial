

import React from 'react'


function Fragments() {
    return (

        // // 1. First Way
        // < React.Fragment>
        //     <h1>hello</h1>
        //     <h2>Hello Fragmnets</h2>
        // </React.Fragment>


        // 2. Second way
        <>
        <h1 style={{backgroundColor:"skyblue", fontWeight:"bold", borderRadius:"70px"}}>Hello Fragment</h1>
        <h1>Hi Developer</h1>
        </>


    )
}

export default Fragments;