import React, { useState } from 'react'
import Multipleform from './Multipleform.css'

export const MultipleForm = () => {
    const [fullName, seFullName] = useState({
        fName: "",
        lName: "",
    })


    // onChange karne par
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        seFullName((preValue) => {
            // console.log(preValue);
            if (name === "fName") {
                return {
                    fName: value,
                    lName: preValue.lName,

                };

            } else if (name === "lName") {
                return {
                    fName: preValue.fName,
                    lName: value,

                };
            }
        });

    };


    const onSubmits = (event) => {
        event.preventDefault();

    };



    return (
        <>
            <div className='main-div'>
                <form >
                    <div className='Conatiner'>
                        <h1>Hello {fullName.fName} {fullName.lName}</h1>

                        <input type="text" placeholder='Enter Your Name' name="fName" className='no-outline first' onChange={inputEvent} value={fullName.fName} />

                        <input type="text" placeholder='Enter Your Last Name' name="lName" className='no-outline' onChange={inputEvent} value={fullName.lName} />

                        {/* <input type="text" placeholder='Enter Your Email' className='no-outline' /> */}


                        <button type='submit' className='btn' onClick={onSubmits} >SUBMIT ME</button>
                    </div>

                </form>
            </div>

        </>
    )
}


